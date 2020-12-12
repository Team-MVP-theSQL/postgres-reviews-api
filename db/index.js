const { Sequelize } = require('sequelize');

const db = new Sequelize('postgresreviews', 'ec2-user', '1234', {
  host: '18.222.175.144',
  port: 5432,
  dialect: 'postgres',
  'logging': false,
});

db.authenticate()
  .then(() => {
    console.log('Connected to postgres');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;