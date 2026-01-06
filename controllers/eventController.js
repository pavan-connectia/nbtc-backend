const Event = require("../models/eventModel");
const NodeCache = require("node-cache");

const cache = new NodeCache();

const createEventController = async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();

    cache.del("events");
    res.status(201).json({
      success: true,
      data: savedEvent,
      message: "Event data inserted successfully",
    });
  } catch (error) {
    console.error("Create Event Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const getAllEventController = async (req, res) => {
  try {
    const cachedEvent = cache.get("event");
    let event;

    if (cachedEvent) {
      event = JSON.parse(cachedEvent);
    } else {
      event = await Event.findOne().lean();
      if (event) {
        cache.set("event", JSON.stringify(event));
      }
    }

    res.status(200).json({
      success: true,
      message: "Event data fetched successfully",
      data: event,
    });
  } catch (error) {
    console.error("Get Event Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const updateEventController = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event data not found" });
    }

    cache.del("event");

    res.status(200).json({
      success: true,
      message: "Event data updated successfully",
      data: updatedEvent,
    });
  } catch (error) {
    console.error("Update Event Error:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

const deleteEventController = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res
        .status(404)
        .json({ success: false, message: "Event data not found" });
    }

    cache.del("events");

    res
      .status(200)
      .json({ success: true, message: "Event data deleted successfully" });
  } catch (error) {
    console.error("Delete Event Error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createEventController,
  getAllEventController,
  updateEventController,
  deleteEventController,
};
