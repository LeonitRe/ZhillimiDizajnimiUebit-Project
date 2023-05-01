const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let outletSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "outlets",
  }
);

module.exports = mongoose.model("Outlet", outletSchema);
