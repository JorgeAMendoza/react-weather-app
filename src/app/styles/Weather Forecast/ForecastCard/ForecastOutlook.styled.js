import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastOutlookStyled = styled.div`
  grid-area: outlook;

  p {
    font-weight: lighter;
    font-size: 1.4rem;

    @media ${device.laptop} {
      font-size: 2rem;
    }
  }
`;
