import styled from 'styled-components';
import { device } from '../../utils/device';

export const IconContainer = styled.div`
  grid-area: icon;

  @media ${device.laptop} {
    img {
      width: 8rem;
    }
  }
`;
