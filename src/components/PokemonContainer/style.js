import styled from 'styled-components';

import { respondTo } from '../../utils/mediaQueryMixin';

export const PokemonWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5rem;
  place-items: center;

  ${respondTo.md`
   grid-template-columns: repeat(2,1fr);
   height: auto;
  `}

  ${respondTo.sm`
   grid-template-columns:  1fr;
  
   
  `}
`;
