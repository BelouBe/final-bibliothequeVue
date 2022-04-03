const BookModel = require("../Model/BookModel");

module.exports = {
  liste_all_book: (req, res) => {
    BookModel.find({}).exec((err, resultat) => {
      if (err) res.send(err);
      res.json(resultat);
    });
  },

  detail_of_book: (req, res) => {
    const id = req.params.id;
    BookModel.findById(id)
      .then((book) => {
        res.json(book);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  create_a_book: (req, res) => {
    const newBook = new BookModel(req.body);
    BookModel.create(newBook, function (err, resultat) {
      if (err) res.send(err);
      res.json(newBook);
    });
  },

  delete_a_book: (req, res) => {
    const id = req.params.id;
    BookModel.findByIdAndDelete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  update_a_book: (req, res) => {
    const id = req.body.id;
    const newBook = req.body.newBook;
    BookModel.findByIdAndUpdate(id, { ...newBook })
      .then((result) => {
        res.json("Book updated successfuly");
      })
      .catch((err) => res.send(err));
  },
};
