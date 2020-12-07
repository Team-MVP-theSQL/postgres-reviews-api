const { Sequelize } = require('sequelize');
const db = new Sequelize('postgresreviews', 'geflores', '1503', {
  host: 'localhost',
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