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

  delete: function({userId, pokemonId}, cb) {
    var command = `DELETE from userAndPokemon WHERE user_id = ${userId} AND poke_id = ${pokemonId}`;

    db.query(command, (err, data) => {
      console.log('Deleted from mySQL', userId, pokemonId);
    });
  },

  userAndPokemon: function({pokemonId, userId}, cb) {
    var command = `INSERT INTO userAndPokemon VALUES (?, ?)`;
    var params = [userId, pokemonId];

    db.query(command, params, (err, data) => {
      console.log('Saved to userAndPokemon');
    });
  },

  getUserPokemon: function(data, cb) {
    var command = `SELECT *
                   FROM userAndPokemon up
                   INNER JOIN allPokemon p ON p.pokemonId = up.poke_id
                   WHERE up.user_id = ${data}`

    db.query(command, (err, results) => {
      if (err) {
        console.error('Error interacting with database', err, data);
      } else {
        cb(null, results);
      }
    });
  },

  login: function({user, password}, cb) {
    var command = `SELECT id from users WHERE username = ? AND password = ?`;
    var params = [user, password];
    
    db.query(command, params, (err, data) => {
      if (err) {
        console.error('Error interacting with login', err);
      } else {
        console.log('Processing login', data);
        cb(null, data);
      }
    });
  },

  signup: function({user, password}, cb) {
    var command = `INSERT INTO users (username, password) VALUES (?, ?)`
    var params = [user, password];

    db.query(command, params, (err, data) => {
      if (err) {
        console.error('Error signing up', err);
      } else {
        console.log('Processing signup', data);
        cb(null, data);
      }
    })
  },

  wallet: function(data, cb) {
    var command = `SELECT money from users WHERE id = ${data}`;

    db.query(command, (err, data) => {
      if (err) {
        console.error('Error interacting with money', err);
      } else {
        console.log('Processing wallet', data);
        cb(null, data);
      }
    });
  },

  updateWallet: function({userId, money}, cb) {
    console.log('Inside updateWallet', userId, money);
    var command = `UPDATE users SET money = ${money} WHERE id = ${userId}`;

    db.query(command, (err, data) => {
      if (err) {
        console.error('Error updating wallet in database', err);
      } else {
        console.log('Processing update', data);
      }
    });
  }
}