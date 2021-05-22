import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { respondTo } from '../../utils/mediaQueryMixin';

const pokemonAnimation = keyframes` 
 0% { height: 20px; width: 20px; opacity:0.1 }
 100% { height: 180px; width: 150px; opacity: 1; }
`;

export const WrapperItem = styled.div`
  position: relative;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  height: 400px;
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
  height: 55%;
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
  top: 62%;
  height: 180px;
  width: 150px;
`;

export const Button = styled.div`
  display: flex;
  position: absolute;
  top: 80%;
  right: 5%;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.twitters};
  min-height: 48px;
  min-width: 80px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.twitters};
    border: 2px solid #fff;
    color: #1d1d1d;
  }
`;
