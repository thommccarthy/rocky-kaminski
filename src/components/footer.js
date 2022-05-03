import React from "react"
import * as footerStyles from "./footer.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <div className={footerStyles.footerWrapper}>
      <p>
        for booking inquiries:{" "}
        <a
          className={footerStyles.footerWrapperLink}
          href="mailto:crabatoadia@gmail.com"
          title="Footer Email Link"
        >
          crabatoadia@gmail.com
        </a>
      </p>
      <p>
        &copy;2022{" "}
        <a
          href="https://crabatoadia.com"
          target="__blank"
          title="Footer Link to Crabatoadia Website"
          className={footerStyles.footerWrapperLink}
        >
          crabatoadia
        </a>
      </p>
    </div>
  )
}

export default Footer
