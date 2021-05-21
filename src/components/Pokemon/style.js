import styled from 'styled-components';
import { respondTo } from '../../utils/mediaQueryMixin';

export const WrapperItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  width: 360px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.9;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${respondTo.sm`
 min-height: 360px;
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
`;

export const PokemonStats = styled.p`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: ${({ up }) => (up ? 'uppercase' : null)};
`;

export const Damage = styled.strong`
  color: ${({ theme }) => theme.notes};
`;

export const Image = styled.img`
  position: absolute;
  top: 60%;
  height: 50%;
  width: 50%;
`;
