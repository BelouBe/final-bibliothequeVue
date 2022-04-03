const User = require("../Model/UserModel");

module.exports = {
  delete_all: (req, res) => {
    User.deleteMany({}, function (err, users) {
      if (err) res.send(err);
      res.send(users);
    });
  },
  liste_all_user: (req, res) => {
    User.find({}, function (err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  },
  create_a_user: (req, res) => {
    const newUser = new User(req.body);
    User.create(newUser, function (err, users) {
      if (err) res.send(err);
      res.json(users);
    });
  },
  update_a_user: (req, res) => {
    const id = req.body.id;
    const updatedUser = req.body.updatedUser;
    User.findByIdAndUpdate(id, { ...updatedUser })
      .then((result) => {
        res.json("updated successfully");
      })
      .catch((err) => res.send(err));
  },
  login: (req, res) => {
    const { matricule, password } = req.body;
    User.find({ $and: [{ matricule: matricule, password: password }] }).exec(
      (err, resultat) => {
        console.log(resultat.length);
        if (err) res.send(err);
        else if (resultat.length == 0) res.json(false);
        else res.json(resultat);
      }
    );
  },
};
