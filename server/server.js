const express = require('express');
const models = require('../client/db/models/pokemonModel.js');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/../client/dist/'));

app.get('/pokemon', (req, res) => {
  models.get((err, data) => {
    if (err) {
      console.error('Error getting allPokemon', err);
    } else {
      res.send(data);
    }
  });
});

app.get('/userAndPokemon', (req, res) => {
  models.getUserPokemon((err, data) => {
    if (err) {
      console.error('Error getting user Pokemon', err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.post('/pokemon', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('POST being processed');
       
        models.post(body, (err, data) => {
          res.send();
        });
     });
});

app.post('/userAndPokemon', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('BOUGHT being processed');

       models.userAndPokemon(body, (err, data) => {
          res.send();
       });
     });
});

// app.post('/login', (req, res) => {
//   var body;

//   req.on('data', (data) => {body = JSON.parse(data)})
//      .on('end', () => {
//         console.log('LOGIN being processed', body);

//         models.login(body, (err, data) => {
//           console.log('Data from login POST', data);

//           res.send(data);
//         });
//      });
// });

app.delete('/delete', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('DELETE being processed');

        models.delete(body, (err, data) => {
          res.send();
        });
     });
});

app.listen(8080, () => {
  console.log('Listening on 8080');
});