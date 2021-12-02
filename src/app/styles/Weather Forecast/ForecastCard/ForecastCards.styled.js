import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastCardsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(7, 1fr);
    border: 1px solid black;
  }
`;
