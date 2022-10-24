const mongoose = require("mongoose");

const Booking = mongoose.model(
  "Booking",
  new mongoose.Schema({
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    hotel: Object,
    startDate: Date,
    endDate: Date,
  })
);

module.exports = Booking;
