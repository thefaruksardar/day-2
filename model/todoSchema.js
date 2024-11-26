const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    task: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const TODO = mongoose.model("Todo", todoSchema);

module.exports = TODO;
