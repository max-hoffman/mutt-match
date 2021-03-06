const db = require('../../models');

module.exports = {
  findAllUsersCtrl: function(req, res) {
    db.User.findAll()
      .then(user => res.send(user))
      .catch(error => res.send(error))
  },
  findOneUserCtrl: function(req, res) {
    db.User.findOne({ where: { id: req.params.id } })
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },
  findOrCreateUserCtrl: function(req, res) {
    db.User.findOrCreate({ where: req.body })
      .then(user => res.send(user))
      .catch(error => res.send(error));
  },
  updateUserCtrl: function(req, res) {
    db.User.update(req.body, { where: { id: req.params.id } })
      .then(user => res.sendStatus(201, user))
      .catch(error => res.send(error));
  },
  deleteUserCtrl: function(req, res) {
    db.User.destroy({ where: { id: req.params.id } })
      .then(user => res.sendStatus(200, user))
      .catch(error => res.send(error));
  }
}
