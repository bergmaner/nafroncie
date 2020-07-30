import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./src/themes/theme";
import SEO from "./src/components/Seo";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background: #F7F7F7;

}
::selection {
    color: white;
    background: ${props => props.theme.colors.main_variant2};
  }
  ::-webkit-scrollbar {
    width: 1em;
  }
   
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.main_variant3};
    outline: none;
    border-radius: 20px;
  }

`;

export const wrapRootElement = ({element}) => (
<ThemeProvider theme={theme}>
    <GlobalStyle/>
    <SEO/>
    {element}
</ThemeProvider>
)
