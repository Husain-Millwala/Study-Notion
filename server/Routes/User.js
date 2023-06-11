const express = require("express");
const router = express.Router();

const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../Controllers/Auth");

const {
  resetPasswordToken,
  resetPassword,
} = require("../Controllers/ResetPassword");

const { auth } = require("../Middlewares/auth");

router.post("/login", login);

router.post("/signup", signup);

router.post("/sendotp", sendotp);

router.post("/changePassword", auth, changePassword);

router.post("/reset-password-token", resetPasswordToken);

router.post("/reset-password", resetPassword);

module.exports = router;
