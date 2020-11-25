import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>The last products</h1>
    <ul>
      {data.allStrapiProduct.nodes.map(p => {
        return (
          <li>
            <Link to={p.gatsbyPath}>{p.Name}</Link> (
            <Link to={`${p.gatsbyPath}?preview=true`}>Preview</Link>)
          </li>
        )
      })}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allStrapiProduct {
      nodes {
        Name
        gatsbyPath(filePath: "/product/{strapiProduct.strapiId}")
      }
    }
  }
`

export default IndexPage
