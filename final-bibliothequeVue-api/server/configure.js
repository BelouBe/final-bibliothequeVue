const path = require("path"),
  routes = require("../Routes/routes"),
  express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true,
      uploadDir: path.join(__dirname, "public/upload/tmp"),
    })
  );
  app.use(bodyParser.json());
  routes(app);
  app.use("/public/", express.static(path.join(__dirname, "../public")));

  return app;
};
