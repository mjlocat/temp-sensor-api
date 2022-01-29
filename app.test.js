import request from 'supertest';
import app from './app';

test('GET /', async () => {
  const response = await request(app)
    .get('/');
  expect(response.statusCode).toBe(200);
});
