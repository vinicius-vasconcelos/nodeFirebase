const firebase = require('firebase');

class UserCtr {
  async store(req, res) {
    const database = firebase.database();

    return true; // res.json(firebase.database());
  }
}

module.exports = new UserCtr();
