import styled from 'styled-components';
import { respondTo } from '../../utils/mediaQueryMixin';

export const DetailsWrapper = styled.div`
  position: relative;
  display: flex;
  height: 600px;
  width: 90%;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.7;
  border: 2px solid ${({ theme }) => theme.twitters};
  justify-content: space-around;
  align-items: center;

  ${respondTo.sm`
   flex-direction: column; 
   padding: 2rem 0;
  `}
`;

export const Header = styled.h2`
  margin: 2rem 0;
  font-size: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.twitters};
`;

export const Image = styled.img`
  position: absolute;
  height: 150px;
  width: 150px;
  top: 60%;
  ${respondTo.sm`
  top: 0;
right: 5%;

  
  `}
`;
