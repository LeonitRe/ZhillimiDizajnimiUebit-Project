const express = require("express");
const tvRoute = express.Router();

// model
let TvModel = require("../models/Tv");

tvRoute.route("/create-tv").post((req, res, next) => {
  TvModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

tvRoute.route("/createtv").get((req, res, next) => {
  TvModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

tvRoute.route("/edit-tv/:id").get((req, res, next) => {
  TvModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update
tvRoute.route("/update-tv/:id").put((req, res, next) => {
  TvModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Computer successfully updated!");
      }
    }
  );
});

// Delete
tvRoute.route("/delete-tv/:id").delete((req, res, next) => {
  TvModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = tvRoute;
