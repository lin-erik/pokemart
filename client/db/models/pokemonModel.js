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
    var command = `DELETE from userAndPokemon WHERE user_id = 1 AND poke_id = ${pokemonId}`;

    db.query(command, (err, data) => {
      console.log('Deleted from mySQL', pokemonId);
    });
  },

  userAndPokemon: function({pokemonId, userId}, cb) {
    var command = `INSERT INTO userAndPokemon VALUES (?, ?)`;
    var params = [userId, pokemonId];

    db.query(command, params, (err, data) => {
      console.log('Saved to userAndPokemon');
    });
  },

  getUserPokemon: function(cb) {
    var command = `SELECT *
                   FROM userAndPokemon up
                   INNER JOIN allPokemon p ON p.pokemonId = up.poke_id
                   WHERE up.user_id = 1`

    db.query(command, (err, results) => {
      if (err) {
        console.error('Error interacting with database', err);
      } else {
        cb(null, results);
      }
    });
  }

  // login: function({user, password}, cb) {
  //   var command = `SELECT * from users WHERE username = ${user} AND password = ${password})`;
  //   console.log('Processing login');

  //   db.query(command, (err, data) => {
  //     cb(null, data);
  //   });
  // }
}