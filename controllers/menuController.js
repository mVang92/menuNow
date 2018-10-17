const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Menu
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.Menu
      .findOne({ creator: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err))
  },
  create: function (req, res) {
    console.log(req.body)
    db.Menu
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.Menu
      .findOneAndUpdate( 
        {creator: req.params.id}, {$push: {items: [req.body]}}
      )
      .then(dbModel => {
        console.log("DB MODEL", dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  changeStatus: function(req, res) {
    console.log('here inside of the changeStatus function')
    db.Menu
      .findOneAndUpdate( 
        {creator: req.params.id}, {status: req.body}
      )
      .then(dbModel => {
        console.log("DB MODEL", dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Menu
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
