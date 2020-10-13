import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./src/themes/theme";
import SEO from "./src/components/SEO";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
}
h1 {
  font-size: ${props => props.theme.sizes.h1.normal};
  @media${props => props.theme.breakpoints.lg}{
    font-size: ${props => props.theme.sizes.h1.lg};
  }
   @media${props => props.theme.breakpoints.md}{
    font-size: ${props => props.theme.sizes.h1.md};
  }
  @media${props => props.theme.breakpoints.sm}{
    font-size: ${props => props.theme.sizes.h1.sm};
  }
}

h2 {
  font-size: ${props => props.theme.sizes.h2.normal};
  @media${props => props.theme.breakpoints.lg}{
    font-size: ${props => props.theme.sizes.h2.lg};
  }
  @media${props => props.theme.breakpoints.md}{
    font-size: ${props => props.theme.sizes.h2.md};
  }
  @media${props => props.theme.breakpoints.sm}{
    font-size: ${props => props.theme.sizes.h2.sm};
  }
}

h3 {
  font-size: ${props => props.theme.sizes.h3.normal};
}

h4 {
  font-size: ${props => props.theme.sizes.h4.normal};
  @media${props => props.theme.breakpoints.md}{
    font-size: ${props => props.theme.sizes.h4.md};
  }
  @media${props => props.theme.breakpoints.sm}{
    font-size: ${props => props.theme.sizes.h4.sm};
  }
}


::selection {
    color: white;
    background: ${props => props.theme.colors.main_variant1};
  }

  ::-webkit-scrollbar {
    width: 1em;
  }
   
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.main_variant2};
    outline: none;
    border-radius: 20px;
  }
`;

export const wrapRootElement = ({element}) => {
    return(
<ThemeProvider theme={theme}>
    <SEO/>
    <GlobalStyle/>
    {element}
</ThemeProvider>
)}
