import React from 'react';

import Header from './Header.js';
import Pokemon from './Pokemon.js';
import Middle from './Middle.js';

const script = require('./scripts/index.js');

class Landing extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPokemon: [],
      dailyPokemon: [],
      pokemon: [],
      wallet: 0,
      value: 0,
      bought: false
    }

    this.changeCurrent = this.changeCurrent.bind(this);
    this.delClicked = this.delClicked.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.dailyPokemon = this.dailyPokemon.bind(this);
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
      var money = Math.floor(Math.random() * (2500 + 1));
      var updatedWallet = (this.state.wallet + money);

      this.setState({
        pokemon: updated,
        wallet: updatedWallet
      });

      script.delPokemon(this.props.userId, poke);
      script.updateWallet(this.props.userId, updatedWallet);
    }

    dailyPokemon() {
      fetch('/pokemon', {
          method: 'GET'
        })
        .then(res => res.json())
        .catch(err => console.error('Error fetching from database', err))
        .then(response => {
          var idx = Math.floor(Math.random() * (response.length));

          this.setState({
            dailyPokemon: response[idx],
            value: Math.floor(Math.random() * (2500 + 1)),
            bought: false
          });

          console.log('This is the response from database', response);
        });
    }

    handleBuy(poke) {
      var updated = this.state.pokemon;
      updated.push(poke);

      var updatedWallet = (this.state.wallet - this.state.value);

      if (updatedWallet < 0) {
        return alert(`You can't afford this Pokemon, you're broke`);
      } else {
        this.setState({
          pokemon: updated,
          wallet: updatedWallet,
          bought: true
        });

        script.buyPokemon(poke, this.props.userId);
        script.updateWallet(this.props.userId, updatedWallet);
      }
    }

    userPokemon(userId) {
      fetch('/allpokemon', {
          method: 'POST',
          body: JSON.stringify(userId)
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

    getWallet(userId) {
      fetch('/user', {
        method: 'POST',
        body: JSON.stringify(userId)
      })
        .then(res => res.json())
        .catch(err => console.error('Error getting money', err))
        .then(response => {
          console.log('How much money', response);
          
          if (response[0].money) {
            this.setState({
              wallet: response[0].money
            });
          }
          
          console.log('User money', this.state.wallet);
        });
    }

    apiPokemon() {
      var num = Math.floor(Math.random() * (720 + 1));
      script.getPokemon(num);
    }

    componentDidMount() {
      this.dailyPokemon();
      this.apiPokemon();
      this.userPokemon(this.props.userId);
      this.getWallet(this.props.userId);
    }

  render() {
    return(
      <div align='center'>
        <Header user={this.props.user} wallet={this.state.wallet} dailyPokemon={this.dailyPokemon} />

        <Middle bought={this.state.bought} dailyPokemon={this.state.dailyPokemon} userId={this.props.userId} handleBuy={this.handleBuy} value={this.state.value} currentPokemon={this.state.currentPokemon} />
        
        <Pokemon currentPokemon={this.state.currentPokemon} pokemon={this.state.pokemon} change={this.changeCurrent} delete={this.delClicked} />

      </div>
    )
  }
}

export default Landing;