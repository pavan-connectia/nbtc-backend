const MailingList = require("../models/mailingListModel");

const createMailingList = async (req, res) => {
  const { email, tag } = req.body;

  const newMailingList = new MailingList({
    email,
    tag,
  });

  await newMailingList.save();

  res.status(201).json({
    success: true,
    message: "MailingList created successfully",
    data: newMailingList,
  });
};

const getMailingLists = async (req, res) => {
  const mailingList = await MailingList.find();
  res.status(200).json({
    success: true,
    message: "MailingList fetched successfully",
    data: mailingList,
  });
};

const getMailingListById = async (req, res) => {
  const mailingList = await MailingList.findById(req.params.id);

  if (!mailingList) {
    return res
      .status(404)
      .json({ success: false, message: "MailingList not found" });
  }

  res.status(200).json({
    success: true,
    message: "MailingList fetched successfully",
    data: mailingList,
  });
};

const updateMailingList = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedMailingList = await MailingList.findByIdAndUpdate(
    id,
    updatedData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedMailingList) {
    return res
      .status(404)
      .json({ success: false, message: "MailingList not found" });
  }

  res.status(200).json({
    success: true,
    message: "MailingList updated successfully",
    data: updatedMailingList,
  });
};

const deleteMailingList = async (req, res) => {
  const id = req.params.id;
  const deletedMailingList = await MailingList.findByIdAndDelete(id);

  if (!deletedMailingList) {
    return res
      .status(404)
      .json({ success: false, message: "MailingList not found" });
  }

  res
    .status(200)
    .json({ success: true, message: "MailingList deleted successfully" });
};

module.exports = {
  createMailingList,
  getMailingLists,
  getMailingListById,
  updateMailingList,
  deleteMailingList,
};
