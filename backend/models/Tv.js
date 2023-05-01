const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tvSchema = new Schema(
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
    image: {
      type: String,
      required: true,
    },
  },
  {
    collection: "tvs",
  }
);

module.exports = mongoose.model("Tv", tvSchema);
