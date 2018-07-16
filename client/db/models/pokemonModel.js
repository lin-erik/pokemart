const db = require('../config.js');

module.exports = {
  get: function(cb) {
    db.getConnection( (err, conn) => {
      conn.query('SELECT * from allPokemon', (err, results) => {
        if (err) {
          cb(err);
        } else {
          cb(null, results);
        }
      });
      
      conn.release();
    });
  },

  post: function({pokemonId, pokeName, pokeNorm, pokeShiny, pokeHeight, pokeWeight}, cb) {
    var command = `INSERT INTO allPokemon VALUES (?, ?, ?, ?, ?, ?)`;
    var params = [pokemonId, pokeName, pokeNorm, pokeShiny, pokeHeight, pokeWeight];
    
    db.getConnection( (err, conn) => {
      conn.query(command, params, (err, data) => {
        console.log('Saved to mySQL');
      });
    
      conn.release();
    });
  },

  delete: function({userId, pokemonId}, cb) {
    var command = `DELETE from userAndPokemon WHERE user_id = ${userId} AND poke_id = ${pokemonId}`;

    db.getConnection( (err, conn) => {
      conn.query(command, (err, data) => {
        console.log('Deleted from mySQL');
      });

      conn.release();
    });
  },

  userAndPokemon: function({pokemonId, userId}, cb) {
    var command = `INSERT INTO userAndPokemon VALUES (?, ?)`;
    var params = [userId, pokemonId];

    db.getConnection( (err, conn) => {
      conn.query(command, params, (err, data) => {
        console.log('Saved to userAndPokemon');
      });

      conn.release();
    });
  },

  getUserPokemon: function(data, cb) {
    var command = `SELECT *
                   FROM userAndPokemon up
                   INNER JOIN allPokemon p ON p.pokemonId = up.poke_id
                   WHERE up.user_id = ${data}`

    db.getConnection( (err, conn) =>{
      conn.query(command, (err, results) => {
        if (err) {
          console.error('Error interacting with database', err, data);
        } else {
          cb(null, results);
        }
      });
    
      conn.release();
    });
  },

  login: function({user, password}, cb) {
    var command = `SELECT id from users WHERE username = ? AND password = ?`;
    var params = [user, password];
    
    db.getConnection( (err, conn) => {
      conn.query(command, params, (err, data) => {
        if (err) {
          console.error('Error interacting with login', err);
        } else {
          console.log('Processing login');
          cb(null, data);
        }
      });

      conn.release();
    });
  },

  signup: function({user, password}, cb) {
    var command = `INSERT INTO users (username, password) VALUES (?, ?)`
    var params = [user, password];

    db.getConnection( (err, conn) => {
      conn.query(command, params, (err, data) => {
        if (err) {
          console.error('Error signing up', err);
        } else {
          console.log('Processing signup');
          cb(null, data);
        }
      });

      conn.release();
    });
  },

  wallet: function(data, cb) {
    var command = `SELECT money from users WHERE id = ${data}`;

    db.getConnection( (err, conn) =>{
      conn.query(command, (err, data) => {
        if (err) {
          console.error('Error interacting with money', err);
        } else {
          console.log('Processing wallet');
          cb(null, data);
        }
      });

      conn.release();
    });
  },

  updateWallet: function({userId, money}, cb) {
    console.log('Inside updateWallet', userId, money);
    var command = `UPDATE users SET money = ${money} WHERE id = ${userId}`;

    db.getConnection( (err, conn) =>{
      conn.query(command, (err, data) => {
        if (err) {
          console.error('Error updating wallet in database', err);
        } else {
          console.log('Processing update');
        }
      });

      conn.release();
    });
  }
}