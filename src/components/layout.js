/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

const theme = {
  colors: {
    white: "#ffffff",
    black: "#121720",
  },
  breakpoints: {},
}

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.white};
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  )
}

export default Layout
