import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1440px;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Overpass', sans-serif;
  font-family: 'VT323', monospace;
  }
  html {
    font-size: 62.5%;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`