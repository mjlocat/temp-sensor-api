const { Sequelize, DataTypes } = require('sequelize');
const sensorModel = require('../models/sensors');
const config = require('../config');

let Sensors;

module.exports = {
  init: async () => {
    const sequelize = await new Sequelize(config.dbname, config.dbuser, config.dbpass, {
      host: config.dbhost,
      dialect: config.dbdialect,
    });
    Sensors = sensorModel(sequelize, DataTypes);
    // await Sensors.syncTable();
    await Sensors.sync();
  },
  addReading: async (sensorid, temperature, humidity) => {
    const { id } = await Sensors.create({ sensorid, temperature, humidity });
    return id;
  },
  getReadingById: async (id) => Sensors.findOne({ id }),
};
