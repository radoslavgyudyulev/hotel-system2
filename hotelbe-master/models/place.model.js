const mongoose = require("mongoose");

const Place = mongoose.model(
  "Place",
  new mongoose.Schema({
    pricePerNight: String,
    description: String,
    distance: Number,
    region: String,
    town: String,
    options: Object,
    name: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  })
);

module.exports = Place;
