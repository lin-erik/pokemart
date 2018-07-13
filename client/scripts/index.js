module.exports = {

  getPokemon: function(num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`, {
      method: 'GET'
    })
    .then(res => res.json())
    .catch(err => console.error('Error fetching from API', err))
    .then(response => {
      this.save(response);
      
      console.log('This is the response from API', response);
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

    fetch('http://localhost:8080/pokemon', {
      method: 'POST',
      body: JSON.stringify(pokemonData)
    })
      .then(res => res.json())
      .catch(err => console.error('Error saving', err));
  },

  buyPokemon(poke, userId) {
    poke.userId = userId;
    console.log('Bought this', poke);

    fetch('http://localhost:8080/userAndPokemon', {
      method: 'POST',
      body: JSON.stringify(poke)
    })
      .then(res => res.json())
      .catch(err => console.error('Error buying', err));
  }
}