const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  CourseName: {
    type: String,
    required: true,
    trim: true,
  },
  CourseDescription: {
    type: String,
    required: true,
    trim: true,
  },
  instructor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],
  whatYouWillLearn: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReviews",
    },
  ],
  price: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  tags: {
    type: [String],
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  studentEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
  },
});

module.exports = mongoose.model("Course", Course);
