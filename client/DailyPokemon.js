import React from 'react';
const script = require('./scripts/index.js');

const DailyPokemon = (props) => {
  return (
    <div>
    <div>Daily Pokemon</div>
      <img src={props.dailyPokemon.pokeNorm} height='250' width='250' onClick={ () => { return props.handleBuy(props.dailyPokemon) }}></img>
      <div>{props.dailyPokemon.pokeName}</div>
    </div>
  )
}

export default DailyPokemon;