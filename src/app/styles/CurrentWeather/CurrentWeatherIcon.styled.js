import styled from 'styled-components';
import { device } from '../utils/device';

export const CurrentWeatherIcon = styled.div`
  grid-area: icon;
  justify-self: right;
  align-self: center;

  img {
    width: 5.5rem;
  }

  @media ${device.laptop} {
    align-self: center;
    justify-self: end;
    img {
      width: 20rem;
    }
    padding-right: 3rem;
  }
`;
