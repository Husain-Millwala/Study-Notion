const Section = require("../Models/Section");
const Course = require("../Models/Course");

exports.createSection = async (req, res) => {
  try {
    const { sectionName, courseId } = req.body;

    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }

    const newSection = await Section.create({ sectionName });

    const updatedCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: { courseContent: newSection._id },
      },
      { new: true }
    )
      .populate({
        path: "couseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourseDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unabble to create section, please try again",
      error: error.message,
    });
  }
};

exports.updateSection = async (req, res) => {
  try {
    const { sectionName, sectionId } = req.body;

    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }

    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Section Updated Successfully",
      section,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unabble to create section, please try again",
      error: error.message,
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    await Section.findByIdAndDelete(sectionId);

    return res.status(200).json({
      success: true,
      message: "Section Deleted  Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unabble to create section, please try again",
      error: error.message,
    });
  }
};
