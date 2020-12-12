-- psql -U user -a -f filepath/filename
DROP TABLE IF EXISTS reviews;
DROP DATABASE IF EXISTS postgresreviews;

CREATE DATABASE postgresreviews;

\c postgresreviews

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  shoeid INTEGER,
  nickname VARCHAR(255),
  location VARCHAR(255),
  title VARCHAR(255),
  body VARCHAR(1234),
  photos VARCHAR(255)[],
  pros VARCHAR(255)[],
  cons VARCHAR(255)[],
  recommended BOOLEAN,
  overallrating SMALLINT,
  qualityrating SMALLINT,
  valuerating SMALLINT,
  timecreated VARCHAR(255)
);
