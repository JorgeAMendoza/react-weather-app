import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastDateStyled = styled.div`
  grid-area: date;

  p {
    font-weight: bold;

    @media ${device.laptop} {
      font-size: 2rem;

      span {
        display: block;
      }
    }
  }
`;
