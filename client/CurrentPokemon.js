import React from 'react';

const CurrentPokemon = (props) => {
  return (
    <div>
      <img src={props.currentPokemon.pokeNorm} height='250' width='250'></img>
      <div>{props.currentPokemon.pokeName}</div>
    </div>
  )
}

export default CurrentPokemon;