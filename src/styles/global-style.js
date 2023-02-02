import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::selection {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }
  }

  html {
    font-size: 62.5%;
    font-family: var(--primary-font);

    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
  
  a {
    text-decoration: none;
    color: var(--primary-color);   
  }

  img { pointer-events: none; }

  li { list-style: none; }
`