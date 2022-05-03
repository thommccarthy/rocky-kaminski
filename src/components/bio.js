import React from "react"
import * as bioStyles from "./bio.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <div className={bioStyles.bioWrapper}>
      <div className={bioStyles.tintType}>
        <StaticImage
          src="../assets/tinttype.jpg"
          alt="Tint Type of Rocky Kaminski and Quasaria Bognes"
        />
      </div>
      <div className={bioStyles.bio}>
        <p>
          Rocky Kaminski is an immersive sci-fi apocabilly jazz experience that
          will thrill you. Born in the 1980’s near a perpetually burning coal
          mine fire in rural PA, Rocky had few ambitions in life aside from
          making licks on his guitar. Strapped for cash as a young man, he
          participated in a clinical trial for experimental anti-aging drugs
          that caused him to live well into the 22nd century and meet
          multi-instrumentalist Quasaria Bognes. A time-traveling garbage truck
          transports them to gigs throughout the fabric of spacetime, where they
          dazzle audiences with a band of superpowered musicians, telling tales
          of a future dystopia.
        </p>
      </div>
    </div>
  )
}

export default Bio
