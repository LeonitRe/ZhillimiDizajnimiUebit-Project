const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let laptopSchema = new Schema(
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
    collection: "laptops",
  }
);

module.exports = mongoose.model("Laptop", laptopSchema);
