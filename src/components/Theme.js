import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const pinkColor = '#e000a3'
const black = '#000'
const white = 'rgba(255, 255, 255, 0.88)'
const carbonGrey = '#282c35'

const theme = {
  pinkColor,
  bgColor: carbonGrey,
  excerptBgColor: '#373c49',
  excerptBorder: 'hsla(0,0%,100%,0.2)',
  fontColor: white,
  secondaryFontColor: black,
  footerBgColor: '#26292f',
}

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: inherit;
  }

  body {
    font-family: Montserrat, sans-serif;
    line-height: 1.75;
    margin: 0;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    min-width: 400px;
  }

  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.75rem;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 2.5rem;
    line-height: 1.1;
  }

  h2 {
    color: ${theme.pinkColor};
  }

  h3 {
    margin: 0;
    padding: 0;
    font-weight: 900;
    text-rendering: optimizeLegibility;
    font-size: 1.4427rem;
    line-height: 2.625rem;
  }
`

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
