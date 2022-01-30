const request = require('supertest');
const app = require('./app');
const handlers = require('./handlers');

jest.mock('./handlers');

test('GET /', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});

test('POST /temperature', async () => {
  handlers.postTemperature.mockImplementation((req, res) => { res.status(200).send({ status: 'OK' }); });
  await request(app).post('/temperature').send({ id: 1, temp: 50, humidity: 50 });
  expect(handlers.postTemperature).toHaveBeenCalled();
});
