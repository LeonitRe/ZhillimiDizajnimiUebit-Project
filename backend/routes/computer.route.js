const express = require("express");
const computerRoute = express.Router();

// model
let ComputerModel = require("../models/Computer");

computerRoute.route("/create-computer").post((req, res, next) => {
  ComputerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

computerRoute.route("/createcomputer").get((req, res, next) => {
  ComputerModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

computerRoute.route("/edit-computer/:id").get((req, res, next) => {
  ComputerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update
computerRoute.route("/update-computer/:id").put((req, res, next) => {
  ComputerModel.findByIdAndUpdate(
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
computerRoute.route("/delete-computer/:id").delete((req, res, next) => {
  ComputerModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = computerRoute;
