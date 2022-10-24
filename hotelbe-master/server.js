const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");
let bcrypt = require("bcryptjs");

const db = require("./models");
const Role = db.role;
const User = db.user;
const Post = db.post;

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const mongoURL = `mongodb+srv://${dbConfig.USER}:${dbConfig.PASSWORD}@cluster0.7d92u2z.mongodb.net/?retryWrites=true&w=majority`;

db.mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  User.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      const adminUser = new User({
        username: "admin",
        email: "admin@mail.com",
        password: bcrypt.hashSync("MyTest123", 8),
        roles: "admin",
      });

      adminUser.save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to user collection");
      });

      const moderatorUser = new User({
        username: "moderator",
        email: "moderator@mail.com",
        password: bcrypt.hashSync("MyTest123", 8),
        roles: "moderator",
      });

      moderatorUser.save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to user collection");
      });

      const basicUser = new User({
        username: "user",
        email: "user@mail.com",
        password: bcrypt.hashSync("MyTest123", 8),
        roles: "user",
      });

      basicUser.save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'basicUser' to user collection");
      });
    }
  });
}

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/ad.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
