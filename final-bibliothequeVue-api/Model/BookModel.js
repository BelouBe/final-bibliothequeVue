const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  categorie: String,
  titre: String,
  extrait: String,
  bookPath: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const BookModel = mongoose.model("BookModel", BookSchema);

module.exports = BookModel;
