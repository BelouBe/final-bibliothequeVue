const BookManagement = require("../Model/BookManagementModel");

module.exports = {
  liste_all_bookManagement: (req, res) => {
    BookManagement.find({}, (err, resultat) => {
      if (err) res.send("err: " + err);
      res.json(resultat);
    });
  },
  add_bookManagement: (req, res) => {
    console.log(req.body);
    const { newBookManagement } = req.body;
    console.log("ato ohhhh");
    BookManagement.find({
      $and: [
        {
          idUser: newBookManagement.idUser,
          idPhysicalBook: newBookManagement.idPhysicalBook,
        },
      ],
    }).exec((err, resultat) => {
      if (err) res.send(err);
      else if (resultat.length != 0) res.send("already exist");
      else {
        BookManagement.create(newBookManagement, (err, resultat) => {
          if (err) res.send(err);
          res.status(200).json("Book added successfully " + resultat);
        });
      }
    });
  },

  delete_bookManagement: (req, res) => {
    const { id } = req.params;
    BookManagement.findByIdAndDelete(id)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  update_bookManagement: (req, res) => {
    const { id, newBookManagement } = req.body;
    BookManagement.findByIdAndUpdate(id, { ...newBookManagement })
      .then((resultat) => {
        res.json("Updated Successfuly");
      })
      .catch((err) => res.send(err));
  },

  emprunt_en_cours: (req, res) => {
    const { idUser } = req.body;
    BookManagement.find({ $where: "this.idUser == '" + idUser + "'" }).exec(
      (err, result) => {
        if (err) res.send(err);
        res.json(result);
      }
    );
  },
};
