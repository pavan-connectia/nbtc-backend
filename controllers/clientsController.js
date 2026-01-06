const Clients = require("../models/clientsModel");

const createClientsController = async (req, res) => {
  try {
    const clients = new Clients(req.body);
    const savedClients = await clients.save();
    res.status(201).json({
      success: true,
      message: "Clients created successfully",
      data: savedClients,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllClientsController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};
    const clientss = await Clients.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Clients fetched successfully",
      data: clientss,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getClientsByIdController = async (req, res) => {
  try {
    const clients = await Clients.findById(req.params.id);
    if (!clients) {
      return res
        .status(404)
        .json({ success: false, message: "Clients not found" });
    }
    res.status(200).json({
      success: true,
      message: "Clients fetched successfully",
      data: clients,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateClientsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedClients = await Clients.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedClients) {
      return res.status(404).json({ message: "Clients not found" });
    }

    if (index !== undefined) {
      const allClientss = await Clients.find().sort({ index: 1 });
      const oldIndex = allClientss.findIndex((t) => t._id.toString() === id);
      const findNewIndex = await Clients.findOne({ index });

      if (!findNewIndex) {
        await Clients.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempClientss = [...allClientss];
        const [removedElement] = tempClientss.splice(oldIndex, 1);
        tempClientss.splice(index, 0, removedElement);

        await Promise.all(
          tempClientss.map(async (element, idx) => {
            return Clients.findByIdAndUpdate(
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
      message: "Clients updated successfully",
      data: updatedClients,
    });
  } catch (error) {
    console.error("Error in Update Clients: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteClientsController = async (req, res) => {
  try {
    const deletedClients = await Clients.findByIdAndDelete(req.params.id);
    if (!deletedClients) {
      return res
        .status(404)
        .json({ success: false, message: "Clients not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Clients deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createClientsController,
  getAllClientsController,
  getClientsByIdController,
  updateClientsController,
  deleteClientsController,
};
