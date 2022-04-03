const BookPhysiqueModel = require("../Model/BookPhysiqueModel");
const fetch = require("node-fetch");
module.exports = {
  //Liste all physical book
  liste_of_physicakBook: async (req, res) => {
    BookPhysiqueModel.find({}).exec((err, resultat) => {
      if (err) res.send(err);
      res.json(resultat);
    });
  },

  //Detail of physical book
  detail_of_physicalBook: (req, res) => {
    const id = req.params.id;
    BookPhysiqueModel.findById(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.send(err));
  },

  //Create a new physical book
  create_a_physicalBook: (req, res) => {
    const physicalBook = new BookPhysiqueModel(req.body);
    BookPhysiqueModel.create(physicalBook, function (err, resultat) {
      if (err) res.send(err);
      res.json(resultat);
    });
  },

  //delete a physical book
  delete_a_physicalBook: (req, res) => {
    const id = req.params.id;
    BookPhysiqueModel.findByIdAndRemove(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.send(err));
  },

  //Emprunter
  emprunter_a_physicalBook: (req, res) => {
    const newBookManagement = req.body.newBookManagement;
    fetch("http://192.168.43.175:3000/api/bookManagement/create", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newBookManagement: {
          idPhysicalBook: newBookManagement.idPhysicalBook,
          idUser: newBookManagement.idUser,
          raison: "Besoin personnel",
          delaiEmprunt: 15,
          confirmAdministrator: 0,
          dateConfirmAdmninistrator: null,
          dateRetour: "20/10/22",
        },
      }),
    })
      .then((resultat) => resultat.text())
      .then((responseJson) => {
        res.send(responseJson);
      })
      .catch((err) => {
        res.send("error: ", err);
      });
  },

  //Update a physical book
  update_a_physicalBook: async (req, res) => {
    const id = req.body.id;
    const newPhyisicalBook = req.body.newPhysicalBook;
    const result = await BookPhysiqueModel.findByIdAndUpdate(id, {
      ...newPhyisicalBook,
    });
    if (result) {
      res.json("Physical book updated successfuly");
    } else {
      res.send("error on updated");
    }
  },
};
