const express = require("express");
const laptopRoute = express.Router();

// model
let LaptopModel = require("../models/Laptop");

laptopRoute.route("/create-laptop").post((req, res, next) => {
  LaptopModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

laptopRoute.route("/createlaptop").get((req, res, next) => {
  LaptopModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

laptopRoute.route("/edit-laptop/:id").get((req, res, next) => {
  LaptopModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update
laptopRoute.route("/update-laptop/:id").put((req, res, next) => {
  LaptopModel.findByIdAndUpdate(
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
laptopRoute.route("/delete-laptop/:id").delete((req, res, next) => {
  LaptopModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = laptopRoute;
