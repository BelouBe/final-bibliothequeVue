const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookManagementSchema = new Schema({
  idPhysicalBook: String,
  idUser: String,
  dateDemandeEmprunt: {
    type: Date,
    default: new Date(),
  },
  raison: String,
  delaiEmprunt: Number,
  confirmAdministrator: Number,
  dateConfirmAdmninistrator: Date,
  dateRetour: String,
});

const BookManagementModel = mongoose.model(
  "BookManagementModel",
  BookManagementSchema
);

module.exports = BookManagementModel;
