const db = require('../config.js');

module.exports = {
  get: function(cb) {
    db.query('SELECT * from allPokemon', (err, results) => {
      if (err) {
        cb(err);
      } else {
        cb(null, results);
      }
    });
  },

  post: function({pokemonId, pokeName, pokeNorm, pokeShiny, pokeHeight, pokeWeight}, cb) {
    var command = `INSERT INTO allPokemon VALUES (?, ?, ?, ?, ?, ?)`;
    var params = [pokemonId, pokeName, pokeNorm, pokeShiny, pokeHeight, pokeWeight];

    db.query(command, params, (err, data) => {
      console.log('Saved to mySQL');
    });
  },

  delete: function({pokemonId}, cb) {
    var command = `DELETE from allPokemon WHERE pokemonId = ${pokemonId}`;

    db.query(command, (err, data) => {
      console.log('Deleted from mySQL');
    });
  },
}