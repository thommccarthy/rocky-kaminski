import React from "react"
import * as navStyles from "./nav.module.css"
import Helmet from "react-helmet"
import scrollTo from "gatsby-plugin-smoothscroll"

const Nav = () => {
  return (
    <div className={navStyles.navWrapper}>
      <Helmet>
        <title>Home | Rocky Kaminski</title>
        <meta
          name="description"
          content="Songs for the nuclear jazz age. Apocabilly Jazz from Philadelphia, PA."
        />
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
                className={navStyles.navLink}
                onClick={() => scrollTo("#shows")}
                title="Shows Link"
              >
                shows
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
