import React from 'react';
import ReactDOM from 'react-dom';
const script = require('./scripts/index.js');

import CurrentPokemon from './CurrentPokemon.js';
import DailyPokemon from './DailyPokemon.js';
import Pokemon from './Pokemon.js';
import Login from './Login.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPokemon: [],
      dailyPokemon: [],
      pokemon: [],
      userId: 1
      // login: false
    }

    this.changeCurrent = this.changeCurrent.bind(this);
    this.delClicked = this.delClicked.bind(this);
  }
  
  changeCurrent(poke) {
    this.setState({
      currentPokemon: poke
    });
  }

  delClicked(poke) {
    var allPoke = this.state.pokemon;
    this.state.pokemon.splice(this.state.pokemon.indexOf(poke), 1);

    var updated = allPoke;
    console.log(updated);

    this.setState({
      pokemon: updated
    });

    this.delPokemon(poke);
  }

  delPokemon(poke) {
    fetch('http://localhost:8080/delete', {
      method: 'DELETE',
      body: JSON.stringify(poke)
    })
      .then(res => res.json())
      .catch(err => console.error('Error deleting', err));
  }

  dailyPokemon() {
    var num = Math.floor(Math.random() * (720 + 1));
    script.getPokemon(num);

    fetch('http://localhost:8080/pokemon', {
        method: 'GET'
      })
      .then(res => res.json())
      .catch(err => console.error('Error fetching from database', err))
      .then(response => {
        var idx = Math.floor(Math.random() * (response.length));

        this.setState({
          dailyPokemon: response[idx]
        });

        console.log('This is the response from database', response);
      });
    }
    
    userPokemon() {
      fetch('http://localhost:8080/userAndPokemon', {
        method: 'GET'
      })
      .then(res => res.json())
      .catch(err => console.error('Error fetching user Pokemon', err))
      .then(response => {
        this.setState({
          pokemon: response
        });

        console.log('This is the list of Pokemon', this.state.pokemon);
      });
    }
  
  componentDidMount() {
    this.dailyPokemon();
    this.userPokemon();
  }

  render() {
    return(
        <div>
          <Login />
          <DailyPokemon dailyPokemon={this.state.dailyPokemon} userId={this.state.userId} />
          <CurrentPokemon currentPokemon={this.state.currentPokemon} />
          <Pokemon currentPokemon={this.state.currentPokemon} pokemon={this.state.pokemon} change={this.changeCurrent} delete={this.delClicked} />
        </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));