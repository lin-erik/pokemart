DROP DATABASE IF EXISTS poke;
CREATE DATABASE poke;

USE poke;

CREATE TABLE pokemon(
  pokemon_id INT PRIMARY KEY,
  pokemon_name VARCHAR(255),
);