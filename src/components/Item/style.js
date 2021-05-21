import styled from 'styled-components';

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  width: 360px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.black};
`;
