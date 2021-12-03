import styled from 'styled-components';

export const StatStyled = styled.div`
  display: grid;
  grid-template-areas:
    'icon text'
    'icon value';

  div {
    grid-area: icon;
    align-self: center;
    margin-right: 0.5rem;

    img {
      width: 35px;
    }
  }

  p:nth-of-type(1) {
    grid-area: text;
    padding: 0;
    margin: 0;
    align-self: end;
  }

  p:nth-of-type(2) {
    grid-area: value;
    text-align: left;
    font-weight: lighter;
  }
`;
