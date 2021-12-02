import styled from 'styled-components';

export const ArrowContainer = styled.span`
  img {
    transform: rotate(${({ rotation }) => (rotation ? rotation : 0)});
    width: 10px;
  }
`;
