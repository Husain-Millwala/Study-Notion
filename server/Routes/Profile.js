const express = require("express");
const router = express.Router();

const { auth } = require("../Middlewares/auth");

const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourse,
} = require("../Controllers/Profile");

router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.get("getUsersDetails", auth, getAllUserDetails);

router.get("/getEnrolledCourse", auth, getEnrolledCourse);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);

module.exports = router;
