const app = require('./app');
const logger = require('./logger');
const Sensors = require('./sensors');

(async () => {
  await Sensors.syncTable();
  app.listen(5000, () => {
    logger.info('Server has started');
  });
})();
