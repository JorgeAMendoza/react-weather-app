import styled from 'styled-components';
import { device } from '../utils/device';

export const TemperatureStyled = styled.p`
  grid-area: temperature;
  font-weight: bold;
  justify-self: left;
  align-self: center;

  @media ${device.laptop} {
    font-size: 2.8rem;
  }
`;
