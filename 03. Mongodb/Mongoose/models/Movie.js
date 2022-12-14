const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  year: String,
  // Can have validations, required etc...
});

const Movie = mongoose.model("Movie", movieSchema);
exports.Movie = Movie;