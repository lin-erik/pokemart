const express = require('express');
const models = require('../client/db/models/pokemonModel.js');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(__dirname + '/../client/dist/'));
app.use(cors());

app.get('/pokemon', (req, res) => {
  models.get((err, data) => {
    if (err) {
      console.error('Error getting allPokemon', err);
    } else {
      res.send(data);
    }
  });
});

app.post('/allpokemon', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('UaP being processed', body)

       models.getUserPokemon(body, (err, data) => {
         if (err) {
           console.error('Error getting user Pokemon', err);
         } else {
           res.send(data);
         }
       });
     });
});

app.post('/user', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('WALLET being processed', body)

       models.wallet(body, (err, data) => {
          res.send(data);
       });
     });
});

app.post('/wallet', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('UPDATING WALLET', body)

       models.updateWallet(body, (err, data) => {
          res.send();
       });
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

app.post('/login', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
        console.log('LOGIN being processed');

        models.login(body, (err, data) => {
          res.send(JSON.stringify(data));
        });
     });
});

app.post('/signup', (req, res) => {
  var body;

  req.on('data', (data) => {body = JSON.parse(data)})
     .on('end', () => {
       console.log('SIGNUP being processed');

       models.signup(body, (err, data) => {
         console.log('Signed up as', data);

          res.send(data);
       });
     })
});

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

// app.get('/*', (req, res) => {
//   res.redirect('/');
// });

const where = process.env.PORT;

app.listen(where || 8080, () => {
  console.log('Listening on 8080');
});