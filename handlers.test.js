const { getMockReq, getMockRes } = require('@jest-mock/express');
const handlers = require('./handlers');

test('Post Temperature', () => {
  const req = getMockReq({
    id: 1,
    temperature: 50,
    humidity: 50,
  });
  const { res, next, clearMockRes } = getMockRes();
  handlers.postTemperature(req, res, next);
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith({
    status: 200,
    id: 1,
  });
  clearMockRes();
});
