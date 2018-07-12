import React from 'react';

const Pokemon = (props) => (
  <div>
    Owned Pokemon
    {props.pokemon.map(poke => {
      if (poke.pokemonId !== props.currentPokemon.pokemonId) {
      return (
      <div key={poke.pokemonId}>
        <img src={poke.pokeNorm} onClick={ () => { return props.change(poke) }}></img>
        {poke.pokeName}
        <div onClick={ () => { return props.delete(poke) }}>Delete</div>
      </div>
      )}
    })}
  </div>
)

export default Pokemon;