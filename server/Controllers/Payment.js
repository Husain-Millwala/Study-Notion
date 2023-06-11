const { default: mongoose } = require("mongoose");
const { instance } = require("../config/razorpay");
const Course = require("../Models/Course");
const User = require("../Models/User");
const MailSender = require("../Utils/MailSender");
const mailSender = require("../Utils/MailSender");

exports.capturePayment = async (req, res) => {
  const { course_id } = req.body;
  const userId = req.user.id;

  if (!course_id) {
    return res.json({
      success: false,
      message: "Please provide valid course Id",
    });
  }

  let course;
  try {
    course = await Course.findById(course_id);
    if (!course) {
      return res.json({
        success: false,
        message: "Could not find the course",
      });
    }

    const uid = new mongoose.Types.ObjectId(userId);
    if (course.studentEnrolled.includes(uid)) {
      return res.status(200).json({
        success: true,
        message: "Student is already enrolled",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  const ammount = course.price;
  const currency = "INR";

  const options = {
    ammount: ammount * 100,
    currency,
    receipt: Math.random(Date.now()).toString(),
    notes: {
      courseId: course_id,
      userId,
    },
  };

  try {
    const paymentResponse = await instance.orders.create(options);
    console.log(paymentResponse);

    return res.status(200).json({
      success: true,
      courseName: course.courseName,
      courseDescription: course.courseDescription,
      thumbnail: course.thumbnail,
      orderId: paymentResponse.orderId,
      currency: paymentResponse.currency,
      ammount: paymentResponse.ammount,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "could not initiate order",
    });
  }
};

exports.verifySignature = async (req, res) => {
  const webhookSecret = "12345678";

  const signature = req.header("x-reazorpay-signature");

  const shasum = crypto.createHmac("sha256", webhookSecret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  if (signature === digest) {
    console.log("Payment is authorised");

    const { course_id, userId } = req.body.payload.payment.entity.notes;

    try {
      const enrolledCourses = await Course.findByIdAndUpdate(
        { _id: course_id },
        { $push: { courses: course_id } },
        { new: true }
      );

      console.log(enrolledCourses);

      const enrolledStudents = await User.findByIdAndUpdate(
        { _id: userId },
        { $push: { courses: course_id } },
        { new: true }
      );

      console.log(enrolledStudents);

      const eamilResponse = await mailSender(
        enrolledStudents.email,
        "Congratulations from codehelp",
        "Congratulation, you are onboarded into new codehelp course"
      );

      console.log(eamilResponse);

      return res.status(200).json({
        success: true,
        message: "Signature verified and course added",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid request",
    });
  }
};
