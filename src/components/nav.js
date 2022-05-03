import React from "react"
import * as navStyles from "./nav.module.css"
import Helmet from "react-helmet"

const Nav = () => {
  return (
    <div className={navStyles.navWrapper}>
      <Helmet>
        <title>Rocky Kaminski | Home</title>
      </Helmet>

      <div className={navStyles.navContent}>
        <div>
          <h1>ROCKY KAMINSKI</h1>
          <ul className={navStyles.navFlex}>
            <li>
              <a
                href="https://rockykaminski.bandcamp.com"
                target="__blank"
                className={navStyles.navLink}
                title="Music Link Out"
              >
                music
              </a>
            </li>
            <li>
              <a
                href="https://crabatoadia.com/store"
                className={navStyles.navLink}
                target="__blank"
                title="Merch Link Out"
              >
                merch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
