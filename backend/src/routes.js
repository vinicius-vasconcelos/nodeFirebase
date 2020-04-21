const { Router } = require('express');
const UserCtr = require('./app/controllers/UserCtr');

const routes = new Router();

routes.get('/', (req, res) => UserCtr.store(req, res));

module.exports = routes;
