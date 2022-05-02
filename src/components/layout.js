import React from "react"
import Nav from "./nav"
import * as layoutStyles from "./layout.module.css"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.siteWrapper}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
