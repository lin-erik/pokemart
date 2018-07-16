import React from 'react';

const Pokemon = (props) => (
  <div style={{marginTop: '50px'}}>
    <div className='row'>
      <div align='center'>Owned Pokemon</div>

      {props.pokemon.map(poke => {
        if (poke.pokemonId !== props.currentPokemon.pokemonId) {
        return (
        <div key={poke.pokemonId} className='col-md-4 mb-10'>
          <div align='center'>
            <img src={poke.pokeNorm} onClick={ () => { return props.change(poke) }}></img>
            <div>{poke.pokeName}</div>
            <div onClick={ () => { return props.delete(poke) }}>Sell</div>
          </div>
        </div>
        )}}
      )}
    </div>
    
  </div>
)

export default Pokemon;