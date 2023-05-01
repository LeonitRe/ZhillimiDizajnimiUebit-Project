const express = require("express");
const outletRoute = express.Router();

// model
let OutletModel = require("../models/Outlet");

outletRoute.route("/create-outlet").post((req, res, next) => {
  OutletModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

outletRoute.route("/createoutlet").get((req, res, next) => {
  OutletModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

outletRoute.route("/edit-outlet/:id").get((req, res, next) => {
  OutletModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update
outletRoute.route("/update-outlet/:id").put((req, res, next) => {
  OutletModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("Outlet product successfully updated!");
      }
    }
  );
});

// Delete
outletRoute.route("/delete-outlet/:id").delete((req, res, next) => {
  OutletModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = outletRoute;
