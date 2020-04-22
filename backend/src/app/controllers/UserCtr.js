const firebase = require('firebase');

class UserCtr {
  async store(req, res) {
    firebase.database().ref().child('users').push(req.body);

    return res.status(200).json({ response: 'Usuário cadastrado com sucesso' });
  }

  async getUsers(req, res) {
    const userList = firebase.database().ref('users').on('value');

    return res.json(userList);
  }
}

module.exports = new UserCtr();
