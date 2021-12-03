import styled from 'styled-components';
import { device } from '../utils/device';

export const OtherStatsStyled = styled.div`
  grid-area: stats;
  text-align: center;
  display: flex;
  gap: 1.5rem;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;
