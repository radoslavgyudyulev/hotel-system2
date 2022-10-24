const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.post = require("./place.model");
db.booking = require("./booking.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
