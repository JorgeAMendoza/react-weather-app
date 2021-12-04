import styled from 'styled-components';
import { device } from '../utils/device';

export const LocationStyled = styled.p`
  grid-area: city;
  text-align: center;
  font-weight: bold;

  @media ${device.laptop} {
    font-size: 2.8rem;
    justify-self: start;
  }
`;
