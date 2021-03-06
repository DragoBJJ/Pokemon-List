import {
    createGlobalStyle
} from "styled-components"


const GlobalStyles = createGlobalStyle `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
  *, *::before, *::after {
      margin:  0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }
  html {
      font-size: 62.5%;
  }
  body {
      font-size: 1.6 rem;
      font-family: "Montserrat", sans-serif;
  }
 `
export default GlobalStyles;