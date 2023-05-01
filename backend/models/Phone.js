const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let phoneSchema = new Schema(
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
    collection: "phones",
  }
);

module.exports = mongoose.model("Phone", phoneSchema);
