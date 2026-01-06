const Quotation = require("../models/quotationModel");
const axios = require("axios");
const sendEmail = require("../utils/sendEmail");

const addQuotation = async (req, res) => {
  const {
    title,
    image,
    cc,
    salesEmailAddress,
    recaptchaToken,
    ...quotationData
  } = req.body;
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
      },
    );

    const { success, score } = response.data;

    if (!success || score < 0.5) {
      return res.status(400).json({
        success: false,
        message: "reCAPTCHA verification failed.",
      });
    }

    const newQuotation = new Quotation(quotationData);
    await newQuotation.save();


    const emailHtml = `
  <div style="font-family: Arial, sans-serif;">
    <p>Dear NBTC Sales Team,</p>

    <p>You have received a new enquiry</p>

    <p><strong>Name:</strong> ${newQuotation.name}</p>
    <p><strong>Email:</strong> ${newQuotation.email}</p>
    <p><strong>Phone:</strong> ${newQuotation.phone}</p>
    <p><strong>Message:</strong> ${newQuotation.message}</p>
    <p><strong>Company:</strong> ${newQuotation.company}</p>
    <p><strong>Location:</strong> ${newQuotation.site}</p>
${newQuotation.pdf
        ? `
    <h3 style="margin-top: 20px;">Resume</h3>
    <p>
      <a href="${process.env.BASE_URL}/${newQuotation.pdf}" target="_blank">
        View / Download Resume
      </a>
    </p>
  `
        : ""
      }

    ${title ? `<p><strong>Project:</strong> ${title}</p>` : "Ganeral enquire"}

    <p>Best regards,<br/>NBTC Website Enquiry System</p>
  </div>
`;


    await sendEmail({
      email: salesEmailAddress,
      subject: `New Sales Enquiry - ${title}`,
      html: emailHtml,
      ...(cc && cc.length && { cc }),
    });


    const emailHtml2 = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>Dear ${newQuotation.name},</p>
    
            <p>Thank you for reaching out to NBTC. We have received your enquiry and will get back to you shortly.</p>
          </div>
        `;

    await sendEmail({
      email: newQuotation.email,
      subject: `Acknowledgement of Your Enquiry`,
      html: emailHtml2,
    });

    res.status(201).json({
      success: true,
      message: "Quotation item added successfully",
      data: newQuotation,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error", error: error.message
    });
  }
};

const editQuotation = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedQuotation = await Quotation.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedQuotation) {
      return res.status(404).json({
        success: false,
        message: "Quotation item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Quotation item updated successfully",
      data: updatedQuotation,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error", error: error.message
    });
  }
};

const deleteQuotation = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuotation = await Quotation.findByIdAndDelete(id);

    if (!deletedQuotation) {
      return res.status(404).json({
        success: false,
        message: "Quotation item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Quotation item deleted successfully",
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error", error: error.message
    });
  }
};

const getAllQuotation = async (req, res) => {
  try {
    const quotation = await Quotation.find();

    res.status(200).json({
      success: true,
      data: quotation,
    });
  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Internal server error", error: error.message
    });
  }
};

const getQuotationById = async (req, res) => {
  const { id } = req.params;
  try {
    const quotation = await Quotation.findById(id);

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Quotation fetched sucessfully",
      data: quotation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch core business items",
      error: error.message,
    });
  }
};

const getQuotationByDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const quotation = await Quotation.find({ department: id });

    if (!quotation) {
      res.status(404).json({
        success: false,
        message: "Quotation not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Quotation fetched sucessfully",
      data: quotation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch core business items",
      error: error.message,
    });
  }
};

module.exports = {
  addQuotation,
  editQuotation,
  deleteQuotation,
  getAllQuotation,
  getQuotationById,
  getQuotationByDepartment,
};
