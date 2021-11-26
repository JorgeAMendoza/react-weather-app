import styled from 'styled-components';
import { device } from '../utils/device';

export const SearchButton = styled.button`
  display: none;
  background-color: #fff;
  padding: 0.5em;
  border-radius: 10px;
  min-width: 10ch;
  font-weight: 700;

  @media ${device.tablet} {
    display: inline-block;
  }
`;
