import React from "react"

import Footer from "./footer/footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `60px auto`,
          maxWidth: 770,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{ display: `block` }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
