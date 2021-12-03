import styled from 'styled-components';
import { device } from './device';

export const ContentContainer = styled.div`
  border: 1px solid black;
  min-height: 100vh;
  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.laptop} {
    justify-content: center;
    align-items: center;
  }
`;
