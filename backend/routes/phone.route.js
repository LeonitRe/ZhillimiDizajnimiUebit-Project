const express = require("express");
const phoneRoute = express.Router();

// model
let PhoneModel = require("../models/Phone");

phoneRoute.route("/create-phone").post((req, res, next) => {
  PhoneModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

phoneRoute.route("/createphone").get((req, res, next) => {
  PhoneModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

phoneRoute.route("/edit-phone/:id").get((req, res, next) => {
  PhoneModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update
phoneRoute.route("/update-phone/:id").put((req, res, next) => {
  PhoneModel.findByIdAndUpdate(
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
phoneRoute.route("/delete-phone/:id").delete((req, res, next) => {
  PhoneModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = phoneRoute;
