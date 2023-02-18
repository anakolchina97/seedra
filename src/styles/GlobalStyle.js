import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;600;700&display=swap");
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Lexend", sans-serif;
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }
`

export default GlobalStyle
