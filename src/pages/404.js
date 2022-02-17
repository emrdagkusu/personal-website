import React from "react"

import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout>
      <div style={{ textAlign: `center` }}>
        <h1>404</h1>
        <p>Page not found</p>
        <a href="/" style={{ color: `black` }}>
          Go to home page
        </a>
      </div>
    </Layout>
  )
}

export default NotFoundPage
