const userRoute = require("./userRoute");
const messateRoute = require("./messageRoute");
const bookRoute = require("./bookRoute");
const bookPhysiqueRoute = require("./bookPhysiqueRoute");
const bookManagementRoute = require("./bookManagementRoute");
module.exports = function (app) {
  app.use("/api/user", userRoute);
  app.use("/api/message", messateRoute);
  app.use("/api/book", bookRoute);
  app.use("/api/bookPhysique", bookPhysiqueRoute);
  app.use("/api/bookManagement", bookManagementRoute);
};
