import React from 'react';

const CurrentPokemon = (props) => (
    <div>
      <div>Your Pokemon</div>
      <img src={props.currentPokemon.pokeNorm}></img>
      <div>{props.currentPokemon.pokeName}</div>
    </div>
)

export default CurrentPokemon;