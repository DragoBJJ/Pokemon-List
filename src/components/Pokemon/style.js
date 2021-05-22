import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { respondTo } from '../../utils/mediaQueryMixin';

const pokemonAnimation = keyframes` 
 0% { height: 20%; width: 20%; opacity:0.1 }
 100% { height: 50%; width: 50%; opacity: 1; }
`;

export const WrapperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  width: 360px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.95;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    img {
      animation: ${pokemonAnimation} 4s infinite;
    }
  }

  ${respondTo.sm`
 min-width: 320px;
  
  `}
`;

export const WrapperStats = styled.div`
  display: flex;
  padding-top: 1rem;
  width: 100%;
  height: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonName = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.twitters};
  letter-spacing: 5px;
`;

export const PokemonStats = styled.p`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: ${({ up }) => (up ? 'uppercase' : null)};
  letter-spacing: ${({ up }) => (up ? '5px' : null)};
`;

export const Damage = styled.strong`
  color: ${({ theme, green }) => (green ? theme.articles : theme.notes)};
`;

export const Image = styled.img`
  position: absolute;
  top: 60%;
  height: 50%;
  width: 50%;
`;
