import styled, { keyframes, css } from 'styled-components';

const smallPhone = `@media only screen and (min-width: 768px)`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ButtonWrapper = styled.button`
  padding: 20px 10px;
  background: ${props => props.background || 'palevioletred'};
  border-radius: ${props => props.radius ? '8px' : '0'};
  color: white;
  margin: 4px 8px;
  min-width: 150px;

  ${props => props.radius && css`
    background: pink;
    padding: 40px;
  `};

  & > span {
    color: black;
  }
`;

export const RedButton = styled(ButtonWrapper)`
  background: red;
`;

export const Loader = styled.div`
  border: 6px solid #fff;
  border-top: 6px solid #3482d9;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${spin} 1s linear infinite;
`;
