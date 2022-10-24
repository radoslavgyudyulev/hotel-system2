const db = require("../models");
const Post = db.post;
const Booking = db.booking;

exports.postPost = (req, res) => {
  console.log(req.body);

  const post = new Post(req.body);

  post.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ message: "Post was registered successfully!" });
  });
};

exports.getAllPosts = (req, res) => {
  Post.find({}, (err, ads) => {
    res.send(ads);
  });
};

exports.getAllBookings = (req, res) => {
  Booking.find({}, (err, ads) => {
    res.send(ads);
  });
};

exports.getHotelById = (req, res) => {
  Post.find({ _id: req.hotelId }, (err, hotel) => {
    res.send(hotel);
  });
};

exports.bookPost = (req, res) => {
  const booking = new Booking(req.body);

  booking.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send({ message: "Hotel was booked successfully!" });
  });
};

exports.deleteUserPosts = (req, res) => {
  Post.deleteOne({ _id: req.body.id }, (err, ad) => {
    if (!err) {
      res.send({ message: "Ad was deleted" });
    }
  });
};
