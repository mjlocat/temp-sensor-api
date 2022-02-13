const app = require('./app');
const logger = require('./logger');
const Sensors = require('./dao/sensors');

(async () => {
  await Sensors.init();
  app.listen(5000, () => {
    logger.info('Server has started');
  });
})();
