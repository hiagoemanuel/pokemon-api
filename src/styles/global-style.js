import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }

  html {
    font-size: 62.5%;
    font-family: 'Overpass', sans-serif;
    font-family: 'VT323', monospace;
  }
  
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);   
  }
`