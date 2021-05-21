import styled from 'styled-components';
import { respondTo } from '../../utils/mediaQueryMixin';

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 360px;
  min-width: 360px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.8;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${respondTo.sm`
 min-height: 360px;
 min-width: 320px;
  
  `}
`;
