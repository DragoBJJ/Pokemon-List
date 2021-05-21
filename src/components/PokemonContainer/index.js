import { useState, useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext';

import { PokemonWrapper } from './style';
import Pokemon from '../Pokemon/index';

const PokemonContainer = () => {
  const { pokemonState } = useContext(PokemonContext);
  console.log(pokemonState);

  return (
    <PokemonWrapper>
      {pokemonState.map((pokemon) => (
        <Pokemon key={pokemon.data.id} {...pokemon} />
      ))}
    </PokemonWrapper>
  );
};

export default PokemonContainer;
