process.env.DBNAME = 'dbname';
process.env.DBUSER = 'dbuser';
process.env.DBPASS = 'dbpass';
process.env.DBHOST = 'dbhost';

test('Get config from environment with default dialect', () => {
  const config = require('./config'); // eslint-disable-line global-require
  expect(config).toStrictEqual({
    dbname: 'dbname',
    dbuser: 'dbuser',
    dbpass: 'dbpass',
    dbhost: 'dbhost',
    dbdialect: 'mysql',
  });
});
