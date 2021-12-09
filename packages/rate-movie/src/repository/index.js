const RateMovie = require("../model/RateMovie")

module.exports = {
  async create(data) {
    await RateMovie.create({...data})
  },


  async show(data) {
    return await RateMovie.exists(data);
  }
}