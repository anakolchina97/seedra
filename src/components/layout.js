/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import theme from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  )
}

export default Layout
