import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastCardStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5em 0.8em;

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'icon date temp'
    'icon outlook temp';

  @media ${device.laptop} {
    border: 1px solid black;
    text-align: center;
    grid-template-areas:
      'icon'
      'date'
      'outlook'
      'temp';
  }
`;
