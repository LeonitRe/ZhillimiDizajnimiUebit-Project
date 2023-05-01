/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connect mongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/allez-app")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });

const computerAPI = require("../backend/routes/computer.route");
const laptopAPI = require("../backend/routes/laptop.route");
const phoneAPI = require("../backend/routes/phone.route");
const tvAPI = require("../backend/routes/tv.route");
const outletAPI = require("../backend/routes/outlet.route");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());

// API
app.use("/api", computerAPI, laptopAPI, phoneAPI, tvAPI, outletAPI);

// Create port
const port = process.env.PORT || 4001;
// eslint-disable-next-line no-unused-vars
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
