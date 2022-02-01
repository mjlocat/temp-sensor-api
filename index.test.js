const app = require('./app');
const logger = require('./logger');
const Sensors = require('./sensors');

jest.mock('./app');
jest.mock('./logger');
jest.mock('./sensors');

app.listen.mockImplementation((port, callback) => { callback(); });
logger.info = jest.fn();
Sensors.syncTable.mockResolvedValue(true);

require('./index');

test('Test startup routine', () => {
  expect(app.listen).toHaveBeenCalled();
  expect(logger.info).toHaveBeenCalled();
  expect(Sensors.syncTable).toHaveBeenCalled();
});
