const express = require("express");
const router = express.Router();

const {
  getStops,
  createStop,
  updateStop,
  deleteStop,
  getStopById,
  getStopByName,
  getStopByCity,
} = require("../controllers/stop");
const { getTravelBuses, createTravel } = require("../controllers/travel");
const {
   
  isUser,
  isStaff,
   
   
} = require("../middlewares/middleware");

//! Travel Routes
router.post("/searchTravel", getTravelBuses); //Working
router.post("/createTravel",     createTravel); //Working

//! Stop Routes
router.get("/stops",   getStops); // Working
router.get("/stop",   getStopByName); //Working
router.get("/stopByCity",   getStopByCity);
router.get("/stop/:id",   getStopById); //Working
router.post("/stop",     createStop); //Working
router.put("/stop/:id",     updateStop); //Working
router.delete("/stop/:id",     deleteStop); //Working

module.exports = router;
