const mongoose = require('mongoose');
// Constructure function from mongoose library to create a schema
const Schema = mongoose.Schema

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

// name passed in the .model() method should be the name of the collection in the db
// express/mongoose would pluralize the given name then looks for it.

// the second argument is the Schema for this model
const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;