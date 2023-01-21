import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fff;
    --black: #000;
    --blue: #005A8E
    --light-blue: #00A2FF;
    --gray: #EBEBEB;
  }
  html {
    font-size: 62.5%;
    height:100%;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    z-index:1;
  }
  body{
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height:1.5;
    font-size: 1.6rem;
    min-height: 100%;
    position:relative;
    background-color: var(--gray);
    color: var(--black);
    padding:1.5rem 0;
  } 
  img,svg,picture,video,canvas {
    max-width: 100%;
    display: block;
  }
  a{
    color:white;
    text-decoration:none;
  }
  input,textarea,select,button {
    font-family: inherit;
  }
  button{
    cursor:pointer;
  }
  ul,ol{
    list-style: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export default GlobalStyle;
