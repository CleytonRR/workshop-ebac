const User = require("../model/User")

module.exports = {
  async create(data) {
    await User.create({...data})
  },

  async show(data) {
    return await User.exists(data);
  },

  async findById(id) {
    return await User.findById(id)
  }
}