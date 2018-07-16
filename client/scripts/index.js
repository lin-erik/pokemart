module.exports = {
  getPokemon: function(num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`, {
      method: 'GET'
    })
    .then(res => res.json())
    .catch(err => console.error('Error fetching from API', err))
    .then(response => {
      this.save(response);
    });
  },
    
  save: function({height, id, name, sprites, weight}) {
    var pokemonData = {
      pokemonId: id,
      pokeName: name,
      pokeNorm: sprites.front_default,
      pokeShiny: sprites.front_shiny,
      pokeHeight: height,
      pokeWeight: weight
    }

    fetch('/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemonData)
    })
      .then(res => res.json())
      .catch(err => console.error('Error saving', err));
  },

  buyPokemon(poke, userId) {
    poke.userId = userId;
    console.log('Bought this', poke);

    fetch('/userAndPokemon', {
      method: 'POST',
      body: JSON.stringify(poke)
    })
      .then(res => res.json())
      .catch(err => console.error('Error buying', err));
  },

  delPokemon(userId, poke) {
    var data = {
      userId: userId,
      pokemonId: poke.poke_id
    }

    fetch('/delete', {
        method: 'DELETE',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .catch(err => console.error('Error deleting', err));
  },

  updateWallet(userId, money) {
    var data = {
      userId: userId,
      money: money
    }

    fetch('/wallet', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .catch(err => console.error('Erorr updating wallet', err));
  }
}