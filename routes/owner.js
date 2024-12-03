const express = require("express");
const router = express.Router();

const { createOwner } = require("../controllers/owner");
const {   isUser, isStaff, isOwner } = require("../middlewares/middleware");
const {
  createBus,
  getBuses,
  getBus,
  addStops,
  getStops,
  editStops,
} = require("../controllers/bus");
const { createSeats, getSeats, editSeats } = require("../controllers/seat");

router.post("/registerOwner",   createOwner); // Working

//! Bus Routes
router.post("/createBus",     createBus); // Working
router.get("/getBuses",     getBuses); // Working
router.get("/getBus/:id",     getBus); // Working

//! Essential routes for bus
router.post("/createSeats/:busId",     createSeats);
router.get("/getSeats/:busId",   getSeats);
router.put("/editSeats/:busId",     editSeats);

//! Essential stop routes for bus
router.post("/addStops/:busId",     addStops);
router.get("/getStops/:busId",   getStops);
router.put("/editStops/:busId",     editStops);

module.exports = router;
