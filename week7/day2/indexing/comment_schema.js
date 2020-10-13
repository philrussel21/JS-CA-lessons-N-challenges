const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Define Post schema
const Comment = new Schema({
  name: String,
  email: String,
  body: String
})
Comment.index({ email: 1 })

module.exports = mongoose.model("Comment", Comment)