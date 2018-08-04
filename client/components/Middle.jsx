import React from 'react';

import CurrentPokemon from './CurrentPokemon.jsx';
import DailyPokemon from './DailyPokemon.jsx';

const Middle = (props) => {
  return(
    <div className='row' margin-bottom='50'>
      <div className='col-md-6'>
        <DailyPokemon bought={props.bought} dailyPokemon={props.dailyPokemon} userId={props.userId} handleBuy={props.handleBuy} value={props.value} />
      </div>

      <div className='col-md-6'>
        <CurrentPokemon currentPokemon={props.currentPokemon} />
      </div>
    </div>
  )
}

export default Middle;