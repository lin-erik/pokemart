import React from 'react';

const CurrentPokemon = (props) => (
    <div align='center'>
      <div>Your Pokemon</div>
      <img src={props.currentPokemon.pokeNorm} width='250' height='250'></img>
      <div>{props.currentPokemon.pokeName}</div>
    </div>
)

export default CurrentPokemon;