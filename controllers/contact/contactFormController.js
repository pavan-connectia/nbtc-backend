const axios = require("axios");
const ContactForm = require("../../models/contact/contactFormModel");
const ExcelJS = require("exceljs");
const sendEmail = require("../../utils/sendEmail");
const CoreBusiness = require("../../models/coreBusinessModel");

const getAllSubmissionsController = async (req, res) => {
  try {
    const submissions = await ContactForm.find();



    res.status(200).json({
      sucess: true,
      message: "Contact submission fetched Successfully",
      data: submissions,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Internal server error", error: error.message
    });
  }
};

const getDepartmentSubmissionsController = async (req, res) => {
  try {
    const submissions = await ContactForm.find({ department: req.params.id });
    res.status(200).json({
      sucess: true,
      message: "Department contact submission fetched Successfully",
      data: submissions,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Internal server error", error: error.message
    });
  }
};

const getSubmissionByIdController = async (req, res) => {
  try {
    const submission = await ContactForm.findById(req.params.id);
    if (!submission) {
      return res
        .status(404)
        .json({ success: false, message: "Contact submission not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact submission fetched successfully",
      data: submission,
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "Internal server error", error: error.message
    });
  }
};

const createSubmissionController = async (req, res) => {
    const {
    recaptchaToken,
    EmailAddress,
    cc,
  } = req.body;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      }
    );

    const { success, score } = response.data;

    if (!success || score < 0.5) {
      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed.",
      });
    }

    const newSubmission = new ContactForm(req.body);
    const savedSubmission = await newSubmission.save();

    const emailHtmlContact = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>Dear NBTC Team,</p>

        <p>A new enquiry has been submitted through the NBTC Contact Form.</p>

        <p><strong>Full Name:</strong> ${savedSubmission.name}</p>
        <p><strong>Email:</strong> ${savedSubmission.email}</p>
        <p><strong>Contact Number:</strong> ${savedSubmission.phoneNo}</p>
        <p><strong>Message:</strong> ${savedSubmission.question}</p>
        

        <p>
          Thank you,<br />
          <strong>NBTC Website Support</strong>
        </p>
      </div>
    `;

    const emailHtmlUser = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>Dear ${savedSubmission.name},</p>

        <p>
          Thank you for contacting <strong>NBTC</strong>.  
          We have received your enquiry and our team will get back to you shortly.
        </p>

        <p>
          Regards,<br />
          <strong>NBTC Team</strong>
        </p>
      </div>
    `;


    await sendEmail({
      email: savedSubmission.email,
      subject: "Thank You for Contacting NBTC",
      html: emailHtmlUser,
    });

    await sendEmail({
      email: EmailAddress,
      subject: "New Contact Form Enquiry",
      html: emailHtmlContact,
      ...(cc && cc.length && { cc }),
    });


    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: savedSubmission,
    });
  } catch (error) {
    console.error("Error creating submission:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


const updateSubmissionController = async (req, res) => {
  try {
    const updatedSubmission = await ContactForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSubmission) {
      return res
        .status(404)
        .json({ success: false, message: "Contact submission not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact submission updated successfully",
      data: updatedSubmission,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteSubmissionController = async (req, res) => {
  try {
    const deletedSubmission = await ContactForm.findByIdAndDelete(
      req.params.id
    );
    if (!deletedSubmission) {
      return res
        .status(404)
        .json({ success: false, message: "Contact submission not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact submission deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const exportSubmissionController = async (req, res) => {
  try {
    let { startDate, endDate } = req.query;

    // Default to all if no date filters provided
    let filter = {};
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const contacts = await ContactForm.find(filter).populate("department");

    console.log(contacts)
    if (!contacts.length) {
      return res.status(404).json({ message: "No contacts found" });
    }

    // Create workbook & sheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");

    // Define columns
    worksheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phoneNo", width: 15 },
      { header: "Subject", key: "subject", width: 30 },
      { header: "Question", key: "question", width: 50 },
      { header: "Department", key: "department", width: 25 },
      { header: "Created At", key: "createdAt", width: 20 },
    ];

    // Add rows
    contacts.forEach((c) => {
      worksheet.addRow({
        name: c.name,
        email: c.email,
        phoneNo: c.phoneNo || "",
        subject: c.subject,
        question: c.question,
        department: c.department?.name?.en || "", // adjust based on your schema
        createdAt: c.createdAt.toISOString().split("T")[0],
      });
    });

    // Style header
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { horizontal: "center" };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFD3D3D3" },
      };
    });

    // Send file
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=contacts_export.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error exporting contacts" });
  }
};

module.exports = {
  getAllSubmissionsController,
  createSubmissionController,
  getDepartmentSubmissionsController,
  getSubmissionByIdController,
  updateSubmissionController,
  deleteSubmissionController,
  exportSubmissionController,
};
