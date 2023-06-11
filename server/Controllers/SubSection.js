const SubSection = require("../Models/SubSection");
const Section = require("../Models/Section");
const { uploadImageToCloudinary } = require("../Utils/ImageUploader");
require("dotenv").config();

exports.createSubSection = async (req, res) => {
  try {
    const { sectionId, title, timeDuration, descripton } = req.body;

    const video = req.files.video;

    if (!sectionId || !title || !timeDuration || !descripton || !video) {
      return res.status(404).json({
        success: false,
        message: "All feilds are required",
      });
    }
    console.log(video);

    const uploadDetails = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME
    );

    const SubSectionDetailes = await SubSection.create({
      title: title,
      timeDuration: `${uploadDetails.timeDuration}`,
      description: descripton,
      video: uploadDetails.secure_url,
    });

    const updatedSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          subSection: SubSectionDetailes._id,
        },
      },
      { new: true }
    ).populate("subSection");

    return res.status(200).json({
      success: true,
      message: "SubSection created successfuly",
      updatedSection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, title, description } = req.body;
    const subSection = await SubSection.findById(sectionId);

    if (!subSection) {
      res.status(404).json({
        success: false,
        message: "SubSection not found",
      });
    }

    if (title !== undefined) subSection.title = title;

    if (description !== undefined) {
      subSection.description = description;
    }

    if (req.files && req.files.video !== undefined) {
      const video = req.files.video;
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
      subSection.VideoUrl = uploadDetails.secure_url;
      subSection.timeDuration = `${uploadDetails.timeDuration}`;
    }
    await subSection.save();

    return res.json({
      success: true,
      message: "SubSection Updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    });
  }
};

exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body;

    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    );

    const subSection = await SubSection.findByIdAndDelete({
      _id: subSectionId,
    });

    if (!subSectionId) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      });
    }

    return res.json({
      success: true,
      message: "SubSection deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    });
  }
};
