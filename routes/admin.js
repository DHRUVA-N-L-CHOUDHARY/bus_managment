const express = require("express");
const router = express.Router();

const { isUser, auth } = require("../middlewares/middleware");
const {
  getStops,
  createStop,
  updateStop,
  deleteStop,
  getStopById,
  getStopByName,
} = require("../controllers/stop");
const {
  getUser,
  getUsers,
  getUserBasedPhoneNumber,
  getBookingsBasedOnPhoneNumber,
  getBookingsBasedOnUserId,
  getOwners,
  getBooking,
  getOwnerById,
  getBuses,
  getBusById,
  getSourceStops,
  getDestinationStops,
} = require("../controllers/admin");

//! Stop Routes
router.get("/stops", getStops); // Working
router.get("/stop", getStopByName); //Working
router.get("/stop/:id", getStopById); //Working
router.post("/stop", createStop); //Working
router.put("/stop/:id", updateStop); //Working
router.delete("/stop/:id", deleteStop); //Working
router.post("/stops/source", getSourceStops); //Working
router.post("/stops/destination", getDestinationStops); // Working

//! Admin Routes
router.get("/users", getUsers); //Working
router.get("/user/:id", getUser); // Working
router.get("/userPhone", getUserBasedPhoneNumber); //Working
router.get("/owners", getOwners); //Working
router.get("/owner/:id", getOwnerById); // Working

//! Bus Routes
router.get("/buses", getBuses); //Working
router.get("/bus/:id", getBusById); //Working

//! Booking Routes
router.get(
  "/bookings/:phoneNumber",

  getBookingsBasedOnPhoneNumber
);
router.get("/bookings/:userId", getBookingsBasedOnUserId);
router.get("/booking/:id", getBooking);

module.exports = router;
