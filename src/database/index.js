import Sequelize from 'sequelize';

import Drink from '../app/models/Drink';

import dbConfig from '../config/database';

const models = [Drink];

class Database {
  constructor() {
    this.connection = new Sequelize(dbConfig);
    this.init();
  }

  init() {
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
