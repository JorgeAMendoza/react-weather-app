import styled from 'styled-components';
import { device } from '../utils/device';

export const TemperatureOutlookStyled = styled.div`
  grid-area: low-high;
  display: flex;
  text-align: center;
  gap: 2rem;

  @media ${device.laptop} {
    font-size: 2rem;

    div {
      display: flex;
      gap: 1rem;
    }
  }

  p:nth-child(2) {
    font-weight: lighter;
  }
`;
