import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import usePreview from "../../hook/usePreview"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PostPage = ({ data, params }) => {
  const [product, setProduct] = useState(data.strapiProduct)
  // use preview if params preview in url
  const [_product] = usePreview(params, false)
  // overide static data
  useEffect(() => {
    if (_product) {
      setProduct(_product)
    }
  }, [_product])

  return (
    <Layout>
      <SEO title={product.Name} />
      <h1>{product.Name}</h1>
      <div>{product.description}</div>
    </Layout>
  )
}

export const query = graphql`
  query($strapiId: Int) {
    strapiProduct(strapiId: { eq: $strapiId }) {
      Name
      description
    }
  }
`

export default PostPage
