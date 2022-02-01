const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

class Sensors extends Model {
  static async syncTable() {
    await Sensors.sync();
  }
}
Sensors.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  sensorid: DataTypes.INTEGER,
  temperature: DataTypes.FLOAT,
  humidity: DataTypes.FLOAT,
}, { sequelize, modelName: 'sensors' });

module.exports = Sensors;
