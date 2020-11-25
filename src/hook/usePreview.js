import { useEffect, useState } from "react"
import Axios from "axios"
import queryString from "query-string"
import { navigate, useLocation } from "@reach/router"

const usePreview = (params, redirect = true) => {
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const { preview } = queryString.parse(location.search)
  useEffect(() => {
    const fetchData = () => {
      Axios.get(`${process.env.API_URL}/products/${params.strapiId}`)
        .then(({ data }) => {
          if (data) {
            setProduct(data)
          }
        })
        .catch(() => {
          navigate("/404/")
        })
    }
    if (preview) {
      fetchData()
    } else if (redirect === true) {
      navigate("/404/")
    }
  }, [params, preview, redirect])

  return [product]
}

export default usePreview
