import styled from 'styled-components';
import { device } from '../utils/device';

export const StyledCurrentWeather = styled.main`
  min-height: 40vh;
  background: linear-gradient(180deg, #00a2ff, #005a8e);
  color: #fff;
  padding: 0.7em;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  gap: 1rem;

  grid-template-areas:
    'city city'
    'icon temperature'
    'status status'
    'low-high low-high'
    'stats stats';

  @media ${device.laptop} {
    grid-template-areas:
      'icon city'
      'icon temperature'
      'icon status'
      'icon low-high'
      'icon stats';
    gap: 0.5rem;
    place-content: center;
    min-height: 40rem;

    & > * {
      justify-self: start;
      align-self: center;
    }
  }
`;
