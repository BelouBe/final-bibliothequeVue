const Message = require("../Model/MessageModel");

module.exports = {
  send_message: (req, res) => {
    const newMessage = new Message(req.body);
    Message.create(newMessage, (err, message) => {
      if (err) res.send(err);
      res.json(message);
    });
  },

  all_message: (req, res) => {
    const matricule = req.params.matricule;
    Message.find({
      $where:
        "this.mSender == '" +
        matricule +
        "' || this.mReceiver == '" +
        matricule +
        "'",
    }).exec(function (err, docs) {
      if (err) res.send(err);
      res.json(docs);
    });
  },

  message_of: (req, res) => {
    const { myMatricule, userMatricule } = req.params;
    Message.find({
      $where:
        "(this.mSender == '" +
        myMatricule +
        "' && this.mReceiver == '" +
        userMatricule +
        "') || (this.mReceiver == '" +
        myMatricule +
        "' && this.mSender == '" +
        userMatricule +
        "') ",
    }).exec(function (err, docs) {
      if (err) res.send(err);
      res.json(docs);
    });
  },

  delete_message: (req, res) => {
    const id = req.params.id;
    Message.findByIdAndDelete(id)
      .then((resultat) => {
        res.json(resultat);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
