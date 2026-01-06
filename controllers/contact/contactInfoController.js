const ContactInfo = require("../../models/contact/contactInfoModel");

const getAllContactInfoController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};

    const contactInfos = await ContactInfo.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Contact info fetched successfully",
      data: contactInfos,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getContactInfoByIdController = async (req, res) => {
  try {
    const contactInfo = await ContactInfo.findById(req.params.id);
    if (!contactInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Contact info not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact info fetched successfully",
      data: contactInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const createContactInfoController = async (req, res) => {
  try {
    const newContactInfo = new ContactInfo(req.body);
    const savedContactInfo = await newContactInfo.save();
    res.status(201).json({
      success: true,
      message: "Contact info inserted successfully",
      data: savedContactInfo,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Sever error" });
  }
};

const updateContactInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedContactInfo = await ContactInfo.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedContactInfo) {
      return res.status(404).json({ message: "ContactInfo not found" });
    }

    if (index !== undefined) {
      const allContactInfo = await ContactInfo.find().sort({ index: 1 });
      const oldIndex = allContactInfo.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await ContactInfo.findOne({ index });

      if (!findNewIndex) {
        await ContactInfo.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempContactInfo = [...allContactInfo];
        const [removedElement] = tempContactInfo.splice(oldIndex, 1);
        tempContactInfo.splice(index, 0, removedElement);

        await Promise.all(
          tempContactInfo.map(async (element, idx) => {
            return ContactInfo.findByIdAndUpdate(
              element._id,
              { index: idx },
              { new: true },
            );
          }),
        );
      }
    }

    res.status(200).json({
      success: true,
      message: "ContactInfo updated successfully",
      data: updatedContactInfo,
    });
  } catch (error) {
    console.error("Error in Update ContactInfo: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteContactInfoController = async (req, res) => {
  try {
    const deletedContactInfo = await ContactInfo.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedContactInfo) {
      return res
        .status(404)
        .json({ success: false, message: "Contact info not found" });
    }
    res.status(200).json({
      success: true,
      message: "Contact info deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createContactInfoController,
  getAllContactInfoController,
  getContactInfoByIdController,
  updateContactInfoController,
  deleteContactInfoController,
};
