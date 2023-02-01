import styled, { keyframes } from 'styled-components';
import device from '../../styles/utils/device';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinningSun = styled.div`
  display: flex;
  justify-content: center;
  img {
    animation: ${rotate} 4s linear infinite;
    width: 25rem;
  }

  @media screen and ${device.tablet} {
    margin-block-start: 7.5rem;
  }
`;

export default { SpinningSun };
