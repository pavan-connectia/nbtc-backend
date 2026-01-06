const Testimonial = require("../models/testimonialModel");

const createTestimonialController = async (req, res) => {
  try {
    const testimonial = new Testimonial(req.body);
    const savedTestimonial = await testimonial.save();
    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: savedTestimonial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getAllTestimonialController = async (req, res) => {
  try {
    const { display } = req.query;

    const filter = display ? { display: display === "true" } : {};

    const testimonials = await Testimonial.find(filter).sort({ index: 1 });
    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const getTestimonialByIdController = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }
    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const updateTestimonialController = async (req, res) => {
  try {
    const { id } = req.params;
    const { index, ...updateData } = req.body;

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true },
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    if (index !== undefined) {
      const allTestimonials = await Testimonial.find().sort({ index: 1 });
      const oldIndex = allTestimonials.findIndex(
        (t) => t._id.toString() === id,
      );
      const findNewIndex = await Testimonial.findOne({ index });

      if (!findNewIndex) {
        await Testimonial.findByIdAndUpdate(id, { index }, { new: true });
      } else {
        const tempTestimonials = [...allTestimonials];
        const [removedElement] = tempTestimonials.splice(oldIndex, 1);
        tempTestimonials.splice(index, 0, removedElement);

        await Promise.all(
          tempTestimonials.map(async (element, idx) => {
            return Testimonial.findByIdAndUpdate(
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
      message: "Testimonial updated successfully",
      data: updatedTestimonial,
    });
  } catch (error) {
    console.error("Error in Update Testimonial: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

const deleteTestimonialController = async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(
      req.params.id,
    );
    if (!deletedTestimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error",error:error.message });
  }
};

module.exports = {
  createTestimonialController,
  getAllTestimonialController,
  getTestimonialByIdController,
  updateTestimonialController,
  deleteTestimonialController,
};
