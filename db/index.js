const { Sequelize } = require('sequelize');

const db = new Sequelize('postgresreviews', 'ec2-user', '1234', {
  host: '3.17.138.203',
  port: 5432,
  dialect: 'postgres',
  'logging': false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => {
    console.log('Connected to postgres');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;