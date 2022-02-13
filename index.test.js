const app = require('./app');
const logger = require('./logger');
const Sensors = require('./dao/sensors');

jest.mock('./app');
jest.mock('./logger');
jest.mock('./dao/sensors');

app.listen.mockImplementation((port, callback) => { callback(); });
logger.info = jest.fn();
Sensors.init.mockResolvedValue(true);

require('./index');

test('Test startup routine', () => {
  expect(app.listen).toHaveBeenCalled();
  expect(logger.info).toHaveBeenCalled();
  expect(Sensors.init).toHaveBeenCalled();
});
