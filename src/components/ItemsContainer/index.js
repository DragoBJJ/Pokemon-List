import { useState, useEffect } from 'react';

import { ItemsWrapper } from './style';
import Item from '../Item/index';

import { getPokemonData } from '../../api/';

const ItemsContainer = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemonData(setPokemon);
  }, []);

  console.log(pokemon[0]);
  return (
    <ItemsWrapper>
      <Item />
      <Item />
      <Item />
    </ItemsWrapper>
  );
};

export default ItemsContainer;
