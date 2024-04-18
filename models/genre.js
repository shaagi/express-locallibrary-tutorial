const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100}
});

// Virtual for this genre instance URL.
genreSchema.virtual("url").get(function() {
     // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

//Export model
module.exports = mongoose.model("Genre", genreSchema);