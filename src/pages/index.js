import * as React from "react"
import Header from "../components/header"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Header />
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
