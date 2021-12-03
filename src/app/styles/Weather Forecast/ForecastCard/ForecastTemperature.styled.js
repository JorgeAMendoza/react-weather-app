import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastTemperatureStyled = styled.div`
  grid-area: temp;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;

    @media ${device.laptop} {
      font-size: 2rem;
    }
  }

  @media ${device.laptop} {
    margin-top: 6rem;
  }
`;
