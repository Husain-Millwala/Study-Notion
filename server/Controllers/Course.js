const Course = require("../Models/Course");
const Category = require("../Models/Category");
const User = require("../Models//User");
const { uploadImageToCloudinary } = require("../Utils/ImageUploader");
require("dotenv").config();

//createCourse
exports.createCourse = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      tag,
      category,
      status,
      instructor,
    } = req.body;

    const thumbnail = req.files.thumbnailImage;

    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !thumbnail ||
      !category
    ) {
      return res.status(401).json({
        success: false,
        message: "All feilds are required",
      });
    }

    if (!status || status === undefined) {
      status = "Draft";
    }
    const instructorDetails = await User.findById(userId, {
      accountType: "Instructor",
    });
    console.log("Instructor Details:", instructorDetails);

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details not found",
      });
    }

    const categoryDetails = await Category.findById(category);

    if (!categoryDetails) {
      return res.status(404).json({
        success: false,
        message: "Category details not found",
      });
    }

    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.FOLDER_NAME
    );
    console.log(thumbnailImage);

    const newCourse = await Course.create({
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn: whatYouWillLearn,
      price,
      tag: tag,
      category: categoryDetails._id,
      thumbnail: thumbnailImage.secure_url,
      status: status,
      instructor: instructor,
    });

    await User.findByIdAndUpdate(
      {
        _id: instructorDetails._id,
      },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create a course",
      error: error.message,
    });
  }
};

//ShowAllCourses

exports.getAllCourses = async (req, res) => {
  try {
    const allcourses = await Course.find(
      {},
      {
        courseName: true,
        courseDescription: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "Data for all courses fetched successfully",
      data: allcourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Cannot fetch course data",
      error: error.message,
    });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const { courseId } = req.body;

    const courseDetails = await Course.find({ _id: courseId })
      .populate({
        path: "instructor",
        populate: {
          path: "additionalDetails",
        },
      })
      .populate("category")
      .populate("ratingAndReviews")
      .populate({
        path: "courseContent",
        populate: {
          path: "subSection",
        },
      })
      .exec();

    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find the course ${courseId}`,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Course Details fetched successfully",
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
