const { authJwt } = require("../middlewares");
const controller = require("../controllers/post.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/ad/post", controller.postPost);

  app.get("/api/ad/all", controller.getAllPosts);

  app.post("/api/hotel/book", controller.bookPost);

  app.get("/api/hotel/get/bookings", controller.getAllBookings);
  app.post("/api/user/ads/delete", controller.deleteUserPosts);
};
