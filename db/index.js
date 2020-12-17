const { Client } = require('pg');
const connectionString = 'postgresql://ec2-user:1234@3.17.138.203:5432/postgresreviews';
const db = new Client({ connectionString });
db.connect()
  .then(() => {
    console.log('Connected to postgres');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = db;