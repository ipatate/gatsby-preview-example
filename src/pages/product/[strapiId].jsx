import React from "react"
import usePreview from "../../hook/usePreview"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const PostPage = ({ data, params }) => {
  const [product] = usePreview(params)

  return (
    <Layout>
      {product ? (
        <>
          <SEO title={product.Name} />
          <h1>{product.Name}</h1>
          <div>{product.description}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  )
}

export default PostPage
