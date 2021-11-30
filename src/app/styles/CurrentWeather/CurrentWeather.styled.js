import styled from 'styled-components';

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
`;
