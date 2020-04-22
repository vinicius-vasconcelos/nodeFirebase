const firebase = require('firebase');

class UserCtr {
  async store(req, res) {
    // const user = firebase.database().ref('users').set(req.body);

    return res.json(req.body);
  }

  async getUsers(req, res) {
    const userList = firebase.database().ref('users').on('value');

    return res.json(userList);
  }
}

module.exports = new UserCtr();
