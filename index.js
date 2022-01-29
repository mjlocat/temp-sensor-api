const app = require('./app');
const logger = require('./logger');

app.listen(5000, () => {
  logger.info('Server has started');
});
