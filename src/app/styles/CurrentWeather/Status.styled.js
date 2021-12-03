import styled from 'styled-components';
import { device } from '../utils/device';

export const StatusStyled = styled.div`
  grid-area: status;
  text-transform: capitalize;

  @media ${device.laptop} {
    font-size: 2.8rem;
  }
`;
