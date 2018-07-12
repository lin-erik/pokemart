import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './Landing.js';
import CurrentPokemon from './CurrentPokemon.js';
import Pokemon from './Pokemon.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPokemon: [],
      pokemon: []
    }

    this.changeCurrent = this.changeCurrent.bind(this);
    this.delClicked = this.delClicked.bind(this);
  }

  getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/151/', {
      method: 'GET'
    })
      .then(res => res.json())
      .catch(err => console.error('Error fetching from API', err))
      .then(response => {
        this.save(response);
        
        console.log('This is the response from API', response);
      });
    };
    
  save({height, id, name, sprites, weight}) {
    var pokemonData = {
      pokemonId: id,
      pokeName: name,
      pokeNorm: sprites.front_default,
      pokeShiny: sprites.front_shiny,
      pokeHeight: height,
      pokeWeight: weight
    }

    fetch('http://localhost:8080/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemonData)
    })
      .then(res => res.json())
      .catch(err => console.error('Error saving', err));
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
  
  componentDidMount() {
    fetch('http://localhost:8080/pokemon', {
      method: 'GET'
    })
    .then(res => res.json())
    .catch(err => console.error('Error fetching from database', err))
    .then(response => {
      this.setState({
        currentPokemon: response[0],
        pokemon: response
      });
      
      console.log('This is the response from database', response);
      console.log('This is the list of Pokemon', this.state.pokemon);
    });
    
    // this.getPokemon();
  }

  render() {
    return(
      // <Router>
        <div>
          {/* <Route path='/' exact render={() => (
            <Landing />
          )}/> */}

          <CurrentPokemon currentPokemon={this.state.currentPokemon} />
          <Pokemon currentPokemon={this.state.currentPokemon} pokemon={this.state.pokemon} change={this.changeCurrent} delete={this.delClicked} />
        </div>
      // </Router>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));