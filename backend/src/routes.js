const { Router } = require('express');
const UserCtr = require('./app/controllers/UserCtr');

const routes = new Router();

routes.post('/', (req, res) => UserCtr.getUsers(req, res));
routes.post('/user', (req, res) => UserCtr.store(req, res));

module.exports = routes;
