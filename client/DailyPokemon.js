import React from 'react';
const script = require('./scripts/index.js');

const DailyPokemon = (props) => {
    if (props.bought) {
      return(
        <div align='center'>
          <div>Pokemon for Sale</div>
          <img src={props.dailyPokemon.pokeShiny} height='250' width='250'/>
          <div>{props.dailyPokemon.pokeName} has been bought</div>
          <div>E{props.value}</div>
        </div>
      )
    } else {
        return(
          <div align='center' className='shadow p-4 mb-4 bg-white'>
            <div>Pokemon for Sale</div>
            <img src={props.dailyPokemon.pokeNorm} height='250' width='250' onClick={ () => { return props.handleBuy(props.dailyPokemon) }}/>
            <div>{props.dailyPokemon.pokeName}</div>
            <div>E{props.value}</div>
          </div>
      )
    }
}

export default DailyPokemon;