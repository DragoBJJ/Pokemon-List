import React from 'react';
import { ItemsWrapper } from './style';
import Item from '../Item/index';

const ItemsContainer = () => {
  return (
    <ItemsWrapper>
      <Item />
      <Item />
      <Item />
    </ItemsWrapper>
  );
};

export default ItemsContainer;
