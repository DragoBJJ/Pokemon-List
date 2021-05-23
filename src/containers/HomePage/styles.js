import styled from 'styled-components';

import pokemon from '../../assets/images/pokemon.jpg';
import { respondTo } from '../../utils/mediaQueryMixin';

export const WrapperHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;
  width: 100vw;
  background-image: url(${pokemon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
