const express = require("express");
const router = express.Router();

const {
  deleteAccount,
  updateDisplayPicture,
  updateProfile,
  getUserDetails,
} = require("../controllers/profile");

const { auth } = require("../middlewares/middleware");

router.post("/deleteAccount",   deleteAccount);
router.put("/updateDisplayPicture",   updateDisplayPicture);
router.post("/updateProfile",   updateProfile);
router.get("/getUserDetails",   getUserDetails);

module.exports = router;
