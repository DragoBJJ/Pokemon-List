import { useState, useEffect } from 'react';

import { PokemonWrapper } from './style';
import Item from '../Item/index';

import { getPokemonData } from '../../api/';

const PokemonItems = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonData(setPokemon);
  }, []);

  console.log(pokemon[0]);
  return (
    <PokemonWrapper>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </PokemonWrapper>
  );
};

export default PokemonItems;
