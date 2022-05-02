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
        >
          crabatoadia@gmail.com
        </a>
      </p>
      <p>
        &copy;2022{" "}
        <a
          href="https://crabatoadia.com"
          target="__blank"
          className={footerStyles.footerWrapperLink}
        >
          crabatoadia
        </a>
      </p>
      {/* <ul class={footerStyles.socialWrapper}>
        <li class={footerStyles.socialIcon}>
          <a>
            <StaticImage src="../assets/insta-white.png" alt="Instagram Logo" />
          </a>
        </li>
        <li class={footerStyles.socialIcon}>
          <a>
            <StaticImage src="../assets/insta-white.png" alt="Instagram Logo" />
          </a>
        </li>
      </ul> */}
    </div>
  )
}

export default Footer
