const mongooose = require("mongoose");

const Schema = mongooose.Schema;

const BookPhysiqueShchema = new Schema({
  titre: String,
  auteur: String,
  dateDeParution: {
    type: Date,
    default: new Date(),
  },
  categorie: String,
  etat: String,
  apropos: String,
});

const BookPhysiqueModel = mongooose.model(
  "PhysicalBookModel",
  BookPhysiqueShchema
);

module.exports = BookPhysiqueModel;
