const { getMockReq, getMockRes } = require('@jest-mock/express');
const Sensors = require('./dao/sensors');

jest.mock('./dao/sensors');

const handlers = require('./handlers');

const { res, next, mockClear } = getMockRes();

beforeEach(() => {
  mockClear();
});

test('Post Temperature', async () => {
  const req = getMockReq({
    body: {
      id: 1,
      temperature: 50,
      humidity: 50,
    },
  });
  Sensors.addReading.mockResolvedValue(2);
  await handlers.postTemperature(req, res, next);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    status: 200,
    id: 2,
  });
  expect(next).toBeCalled();
});
