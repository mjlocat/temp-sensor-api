const Sensors = require('./sensors');

async function postTemperature(req, res, next) {
  const { id, temperature, humidity } = req.body;
  const insertedId = await Sensors.create({ sensorid: id, temperature, humidity });
  res.status(200);
  res.json({
    status: 200,
    id: insertedId,
  });
  next();
}

module.exports = {
  postTemperature,
};
