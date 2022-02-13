module.exports = (sequelize, DataTypes) => sequelize.define('sensors', {
  sensorid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sensorid',
  },
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'temperature',
  },
  humidity: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'humidity',
  },
}, {
  tableName: 'sensors',
  timestamps: true,
  createdAt: 'creTs',
  updatedAt: 'updTs',
});
