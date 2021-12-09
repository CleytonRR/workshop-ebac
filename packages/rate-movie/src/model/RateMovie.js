
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  idMovie: mongoose.Schema.Types.ObjectId,
  idUser: mongoose.Schema.Types.ObjectId,
  rate: Number
});

module.exports = mongoose.model("RateMovie", schema);