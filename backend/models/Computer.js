const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let computerSchema = new Schema(
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
    collection: "computers",
  }
);

module.exports = mongoose.model("Computer", computerSchema);
