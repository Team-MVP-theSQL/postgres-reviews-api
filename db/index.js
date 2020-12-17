const { Pool } = require('pg')
const connectionString = 'postgresql://ec2-user:1234@3.17.138.203:5432/postgresreviews'
const db = new Pool({
  connectionString,
});

module.exports = db;
