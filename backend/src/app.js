const express = require('express');
const cors = require('cors');
const Routes = require('./routes');
const database = require('./config/database');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.initConnection();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(Routes);
  }

  initConnection() {
    if (database)
      console.log(`Base de dados conectada com ${database.options.projectId}`);
    else console.log('falha se conexão com a base de dados');
  }
}

module.exports = new App().server;
