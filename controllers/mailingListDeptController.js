const MailingListDept = require("../models/mailingListDeptModel");

const createMailingListDept = async (req, res) => {
  const { email, department, tag } = req.body;

  const newMailingListDept = new MailingListDept({
    email,
    department,
    tag,
  });

  await newMailingListDept.save();

  res.status(201).json({
    success: true,
    message: "MailingListDept created successfully",
    data: newMailingListDept,
  });
};

const getMailingListDepts = async (req, res) => {
  const mailingListDept = await MailingListDept.find();
  res.status(200).json({
    success: true,
    message: "MailingListDept fetched successfully",
    data: mailingListDept,
  });
};

const getMailingListDeptByDeptId = async (req, res) => {
  const mailingListDept = await MailingListDept.find({
    department: req.params.id,
  });
  res.status(200).json({
    success: true,
    message: "MailingListDept fetched successfully",
    data: mailingListDept,
  });
};

const getMailingListDeptById = async (req, res) => {
  const mailingListDept = await MailingListDept.findById(req.params.id);

  if (!mailingListDept) {
    return res
      .status(404)
      .json({ success: false, message: "MailingListDept not found" });
  }

  res.status(200).json({
    success: true,
    message: "MailingListDept fetched successfully",
    data: mailingListDept,
  });
};

const updateMailingListDept = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedMailingListDept = await MailingListDept.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedMailingListDept) {
    return res
      .status(404)
      .json({ success: false, message: "MailingListDept not found" });
  }

  res.status(200).json({
    success: true,
    message: "MailingListDept updated successfully",
    data: updatedMailingListDept,
  });
};

const deleteMailingListDept = async (req, res) => {
  const id = req.params.id;
  const deletedMailingListDept = await MailingListDept.findByIdAndDelete(id);

  if (!deletedMailingListDept) {
    return res
      .status(404)
      .json({ success: false, message: "MailingListDept not found" });
  }

  res
    .status(200)
    .json({ success: true, message: "MailingListDept deleted successfully" });
};

module.exports = {
  createMailingListDept,
  getMailingListDepts,
  getMailingListDeptByDeptId,
  getMailingListDeptById,
  updateMailingListDept,
  deleteMailingListDept,
};
