import Sequelize, { Model } from 'sequelize';

class Drink extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        apu: Sequelize.FLOAT,
        price: Sequelize.FLOAT,
      },
      { sequelize }
    );
    return this;
  }
}

export default Drink;
