import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &::before,
    &::after {
      margin: 0;
      padding: 0;
      border-width: 0;
      border-style: solid;
      box-sizing: border-box;
    }
  }

  :root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  }

  a{
    text-decoration: none;
  }

  /* a:visited {
    color: inherit;
  } */

  body {
     font-family: 'Rubik', sans-serif; 
     /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",  */
  }

  ul,
  li,
  ol {
    list-style: none;
  }

  html {
  scroll-behavior: smooth;
  }

  button {
  outline: none;
  border: none;
  }

  a, button {
  cursor: pointer;
  }
`
