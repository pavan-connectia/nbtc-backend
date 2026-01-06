const CareersForm = require("../../models/careers/careersFormModel");
const CareersOpening = require("../../models/careers/careersOpeningModel");

const ExcelJS = require("exceljs");
const sendEmail = require("../../utils/sendEmail");

const createCareersFormController = async (req, res) => {
  try {
    const careersForm = new CareersForm(req.body);
    const savedCareersForm = await careersForm.save();

    const opening = await CareersOpening.findById(
      savedCareersForm.selectedOpening
    );

    const openingTitle = opening?.title?.en || "N/A";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>Dear ${savedCareersForm.name || "Applicant"},</p>

        <p>
          Thank you for submitting your application to
          <strong>NBTC Careers</strong>. We appreciate your interest in joining
          our team and the time you took to complete your application.
        </p>

        <p>
          Our hiring team will carefully review your submission. If your
          qualifications align with our current requirements, we will contact
          you regarding the next steps. Please note that the review process may
          take some time.
        </p>

        <p>
          Thank you once again for your interest in NBTC. We wish you the best
          and appreciate your patience.
        </p>

        <p>
          Regards,<br />
          <strong>NBTC HR Department</strong>
        </p>
      </div>
    `;

    const emailHtmlHR = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <p>Dear NBTC HR Team,</p>

    <p>
      A new job application has been submitted through the <strong>NBTC Careers Portal</strong>.
    </p>

    <h3 style="margin-top: 20px;">Applicant Details</h3>

    <p><strong>Full Name:</strong> ${savedCareersForm.fName} ${savedCareersForm.mName || ""} ${savedCareersForm.lName || ""}</p>
    <p><strong>Email:</strong> ${savedCareersForm.email}</p>
    <p><strong>Contact Number:</strong> ${savedCareersForm.phone}</p>
    <p><strong>Nationality:</strong> ${savedCareersForm.nationality || "N/A"}</p>
    <p><strong>Age:</strong> ${savedCareersForm.age || "N/A"}</p>
    <p><strong>Gender:</strong> ${savedCareersForm.gender || "N/A"}</p>
    <p><strong>Current Location:</strong> ${savedCareersForm.location || "N/A"}</p>

    <h3 style="margin-top: 20px;">Professional Information</h3>

    <p><strong>Position Applied For:</strong> ${openingTitle}</p>
    <p><strong>Years of Experience:</strong> ${savedCareersForm.experience || "N/A"}</p>
    <p><strong>Educational Qualification:</strong> ${savedCareersForm.eduQualification || "N/A"}</p>
    <p><strong>Technical Qualification:</strong> ${savedCareersForm.techQualification || "N/A"}</p>

    <h3 style="margin-top: 20px;">Cover Message</h3>
    <p>${savedCareersForm.remarks || "No cover message provided."}</p>

    <h3 style="margin-top: 20px;">Resume</h3>
    <p>
      <a href="${process.env.BASE_URL}/${savedCareersForm.resume}" target="_blank">
        View / Download Resume
      </a>
    </p>

    <p style="margin-top: 30px;">
      Kindly review the application and take the necessary action.
    </p>

    <p>
      Regards,<br />
      <strong>NBTC Careers System</strong>
    </p>
  </div>
`;


    await sendEmail({
      email: savedCareersForm.email,
      subject: "Thank You for Applying to NBTC Careers",
      html: emailHtml,
    });

    await sendEmail({
      email: process.env.HREmail,
      subject: `New Job Application`,
      html: emailHtml,
    });

    res.status(201).json({
      success: true,
      message: "Careers form submitted successfully",
      data: savedCareersForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const getAllCareersFormController = async (req, res) => {
  try {
    const careersForms = await CareersForm.find().populate(
      "selectedOpening",
      "title location department"
    );
    res.status(200).json({
      success: true,
      message: "Careers form fetched successfully",
      data: careersForms,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const getCareersFormByDepartmentController = async (req, res) => {
  const { id } = req.params;

  try {
    const careersForms = await CareersForm.find()
      .populate({
        path: "selectedOpening",
        match: { department: id },
        select: "title href department",
      })
      .exec();

    const filteredForms = careersForms.filter((form) => form.selectedOpening);

    if (filteredForms.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No careers forms found for this department",
      });
    }

    res.status(200).json({
      success: true,
      message: "Careers forms fetched successfully",
      data: filteredForms,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const getCareersFormByIdController = async (req, res) => {
  try {
    const careersForm = await CareersForm.findById(req.params.id).populate(
      "selectedOpening"
    );
    if (!careersForm) {
      return res
        .status(404)
        .json({ success: false, message: "Careers form not found" });
    }
    res.status(200).json({
      success: true,
      message: "Careers form fetched successfully",
      data: careersForm,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const updateCareersFormController = async (req, res) => {
  try {
    const updatedCareersForm = await CareersForm.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCareersForm) {
      return res
        .status(404)
        .json({ success: false, message: "Careers form not found" });
    }
    res.status(200).json({
      success: true,
      data: updatedCareersForm,
      message: "Careers form updated successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const deleteCareersFormController = async (req, res) => {
  try {
    const deletedCareersForm = await CareersForm.findByIdAndDelete(
      req.params.id
    );
    if (!deletedCareersForm) {
      return res
        .status(404)
        .json({ success: false, message: "Careers form not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Careers form deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
  }
};

const exportCareersController = async (req, res) => {
  try {
    let { startDate, endDate } = req.query;

    // Build filter
    let filter = {};
    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const submissions = await CareersForm.find(filter)
      .populate("selectedOpening", "title") // populate job title
      .lean();

    if (!submissions.length) {
      return res.status(404).json({ message: "No career submissions found" });
    }

    // Create workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Careers");

    // Define columns
    worksheet.columns = [
      { header: "First Name", key: "fName", width: 20 },
      { header: "Middle Name", key: "mName", width: 20 },
      { header: "Last Name", key: "lName", width: 20 },
      { header: "Nationality", key: "nationality", width: 20 },
      { header: "Age", key: "age", width: 10 },
      { header: "Gender", key: "gender", width: 15 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Location", key: "location", width: 20 },
      { header: "Experience", key: "experience", width: 20 },
      { header: "Education", key: "eduQualification", width: 25 },
      {
        header: "Technical Qualification",
        key: "techQualification",
        width: 25,
      },
      { header: "Remarks", key: "remarks", width: 40 },
      { header: "Resume File", key: "resume", width: 40 },
      { header: "Job Opening", key: "jobOpening", width: 25 },
      { header: "Submitted At", key: "createdAt", width: 20 },
    ];

    // Add rows
    submissions.forEach((s) => {
      worksheet.addRow({
        fName: s.fName,
        mName: s.mName || "",
        lName: s.lName || "",
        nationality: s.nationality || "",
        age: s.age || "",
        gender: s.gender || "",
        email: s.email,
        phone: s.phone,
        location: s.location || "",
        experience: s.experience || "",
        eduQualification: s.eduQualification || "",
        techQualification: s.techQualification || "",
        remarks: s.remarks || "",
        resume: s.resume, // file path
        jobOpening: s.selectedOpening?.title || "",
        createdAt: s.createdAt.toISOString().split("T")[0],
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

    // Send response
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=careers_export.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error exporting careers form" });
  }
};

module.exports = {
  createCareersFormController,
  getAllCareersFormController,
  getCareersFormByIdController,
  updateCareersFormController,
  deleteCareersFormController,
  getCareersFormByDepartmentController,
  exportCareersController,
};
