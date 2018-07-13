USE pokemon;

CREATE TABLE allPokemon (
  pokemonId INT PRIMARY KEY UNIQUE,
  pokeName VARCHAR(255),
  pokeNorm VARCHAR(255),
  pokeShiny VARCHAR(255),
  pokeHeight INT,
  pokeWeight INT
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
  username VARCHAR(255),
  password VARCHAR(255),
  money INT DEFAULT 5000
);

CREATE TABLE userAndPokemon (
  user_id INT,
  poke_id INT
)