USE pokemon;

CREATE TABLE allPokemon (
  pokemonId INT PRIMARY KEY UNIQUE,
  pokeName VARCHAR(255),
  pokeNorm VARCHAR(255),
  pokeShiny VARCHAR(255),
  pokeHeight INT,
  pokeWeight INT
);