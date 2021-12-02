import styled from 'styled-components';
import { device } from '../../utils/device';

export const ForecastCardStyled = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5em 0.8em;
  box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.25);

  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas:
    'icon date temp'
    'icon outlook temp';

  @media ${device.laptop} {
    text-align: center;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    grid-template-areas:
      'icon'
      'date'
      'outlook'
      'temp';

    & > * {
      justify-self: center;
      align-self: start;
    }
  }
`;
