import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 2rem;
  padding-left: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 2rem;
  border: 2px solid black;
`;
