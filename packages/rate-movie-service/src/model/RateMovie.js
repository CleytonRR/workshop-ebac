
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  idMovie: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  nota: Number
});

module.exports = mongoose.model("RateMovie", schema);