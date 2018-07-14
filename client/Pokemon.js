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


    {/* <Carousel interval={null} indicators={false} slide={false} wrap={false} >
      {props.pokemon.map(poke => {
        return(
          <Carousel.Item>
            <img src={poke.pokeNorm} height={250} width={250} alt='250x250' onClick={ () => { return props.change(poke) }} />
            <Carousel.Caption>
              <h3>{poke.pokeName}</h3>
              <p onClick={ () => { return props.delete(poke) }}>Sell</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
      </Carousel> */}

  </div>
)

export default Pokemon;