const Csr = require("../../models/news/csrModel");

const createCsrController = async (req, res) => {
  try {
    const newCsr = new Csr(req.body);
    await newCsr.save();
    res.status(201).json({
      success: true,
      message: "Csr created successfully",
      data: newCsr,
    });
  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: "Internal server error",error:error.message
    });
  }
};

const getAllCsrController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};

    const csrs = await Csr.find(filter).sort({ index: 1 });
    res
      .status(200)
      .json({ success: true, message: "Csr fetched successfully", data: csrs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getCsrByIdController = async (req, res) => {
  try {
    const csr = await Csr.findById(req.params.id);

    if (!csr) {
      return res.status(404).json({ success: false, message: "CSR not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Csr fetched successfully", data: csr });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateCsrController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedCsr = await Csr.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCsr) {
      return res.status(404).json({ message: "Csr not found" });
    }

    if (index !== undefined) {
      const allCsrs = await Csr.find().sort({ index: 1 });
      const oldIndex = allCsrs.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await Csr.findOne({ index });

      if (!findNewIndex) {
        await Csr.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempCsrs = [...allCsrs];
        const [removedElement] = tempCsrs.splice(oldIndex, 1);
        tempCsrs.splice(index, 0, removedElement);

        await Promise.all(
          tempCsrs.map(async (element, idx) => {
            return Csr.findByIdAndUpdate(
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
      message: "Csr updated successfully",
      data: updatedCsr,
    });
  } catch (error) {
    console.error("Error in Update Csr: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteCsrController = async (req, res) => {
  try {
    const deletedCsr = await Csr.findByIdAndDelete(req.params.id);

    if (!deletedCsr) {
      return res.status(404).json({ success: false, message: "CSR not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "CSR deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCsrByDepartment = async (req, res) => {
  try {
    const { display, name } = req.query;

    const filter = display ? { display: display === "true" } : {};

    const csr = await Csr.find(filter)
      .populate({
        path: "department",
        select: "title href",
      })
      .exec();

    const filteredCsr = csr.filter(
      (qualification) =>
        qualification.department && qualification.department.href === name,
    );

    res.status(200).json({
      success: true,
      message: "Csr fetched successfully",
      data: filteredCsr,
    });
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createCsrController,
  getAllCsrController,
  getCsrByIdController,
  getCsrByDepartment,
  updateCsrController,
  deleteCsrController,
};
