const mongoose = require("mongoose");
const mailSender = require("../Utils/MailSender");

const OTP = new mongoose.Schema({
  otp: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification email from Study Notion",
      otp
    );
    console.log("Emsil sent successfully", mailResponse);
  } catch (error) {
    console.log("error accur while sending mail", error);
    throw error;
  }
}

OTP.pre("save", async function (next) {
  await sendVerificationEmail(this.email, this.otp);
  next();
});
module.exports = mongoose.model("OTP", OTP);
