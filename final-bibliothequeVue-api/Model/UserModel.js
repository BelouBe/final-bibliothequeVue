const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  nom: String,
  prenom: String,
  matricule: String,
  email: String,
  numero: String,
  profil: String,
  password: String,
  status: Number,
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
