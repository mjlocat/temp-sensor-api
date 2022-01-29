import app from './app';
import logger from './logger';

app.listen(5000, () => {
  logger.info('Server has started');
});
