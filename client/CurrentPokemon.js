import React from 'react';

const CurrentPokemon = (props) => {
  return (
    <div>
      <div>Pokemon of the Day</div>
      <img src={props.currentPokemon.pokeNorm} height='250' width='250'></img>
      <div>{props.currentPokemon.pokeName}</div>
    </div>
  )
}

export default CurrentPokemon;