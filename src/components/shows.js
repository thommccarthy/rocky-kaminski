import React from "react"
import * as showsStyles from "./shows.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Shows = () => {
  return (
    <div id="shows" className={showsStyles.showsWrapper}>
      <h2 className={showsStyles.header}>Shows</h2>
      {/* single show */}
      <div
        className={showsStyles.singleShowWrapper}
        role="group"
        aria-label="card"
      >
        <div className={showsStyles.showDetails}>
          <div className={showsStyles.showDateWrapper}>
            <h3 className={showsStyles.showDate}>06/17/2023</h3>
          </div>

          <div className={showsStyles.artistNames}>
            <a
              href="https://www.rockykaminski.com"
              target="__blank"
              aria-current="page"
            >
              Rocky Kaminski
            </a>
            <br />
            <a href="https://thegreatbard.bandcamp.com/" target="__blank">
              The Great Bard
            </a>{" "}
            <br />
            <a
              href="https://www.instagram.com/littlenoiseband/?hl=en"
              target="__blank"
            >
              Little Noise
            </a>
            <br />
          </div>
          <p>
            <span className={showsStyles.venue}>Upstairs at Abyssinia</span>{" "}
            <br /> 229 S. 45th St. <br /> Philadelphia, PA
          </p>
          <p>Show 8pm</p>
          <p>$10 cover</p>
        </div>
        <div className={showsStyles.posterWrapper}>
          <StaticImage src="../assets/Abyssinia_Flyer_tall4.jpg" />
        </div>
      </div>
      {/* single show */}
      <div
        className={showsStyles.singleShowWrapper}
        role="group"
        aria-label="card"
      >
        <div className={showsStyles.showDetails}>
          <div className={showsStyles.showDateWrapper}>
            <h3 className={showsStyles.showDate}>03/15/2023</h3>
          </div>
          <p>
            Dave Kiss Presents: <br />
          </p>
          <div className={showsStyles.artistNames}>
            <a href="https://the-meteors.bandcamp.com/" target="__blank">
              The Meteors
            </a>{" "}
            <br />
            <a href="https://thegravamen.mightyjoecastro.com/" target="__blank">
              Mighty Joe Castro and the Gravamen
            </a>
            <br />
            <a href="https://www.rockykaminski.com" target="__blank">
              Rocky Kaminski
            </a>
          </div>
          <p>
            <span className={showsStyles.venue}>Kung Fu Necktie</span> <br />{" "}
            1248 N. Front St. <br /> Philadelphia, PA
          </p>
          <p>Doors 7pm | Show 730pm</p>

          <a
            className={showsStyles.ticketsButton}
            href="https://www.etix.com/ticket/p/2721417/the-meteors-mighty-joe-castro-and-the-gravamen-rocky-kaminski-philadelphia-kung-fu-necktie"
            target="__blank"
            title="Link to Tickets"
          >
            Get tickets
          </a>
        </div>
        <div className={showsStyles.posterWrapper}>
          <StaticImage src="../assets/MJC_Gravamen_Meteors_KFN_Mar15_v2.jpg" />
        </div>
      </div>
      {/* single show */}
      <div
        className={showsStyles.singleShowWrapper}
        role="group"
        aria-label="card"
      >
        <div className={showsStyles.showDetails}>
          <div className={showsStyles.showDateWrapper}>
            <h3 className={showsStyles.showDate}>05/30/2022</h3>
          </div>
          <p>
            Dave Kiss Presents: <br />
          </p>
          <div className={showsStyles.artistNames}>
            <a href="http://www.reverendhortonheat.com/" target="__blank">
              Reverend Horton Heat
            </a>{" "}
            <br />
            <a href="https://www.koffinkatsrock.com/" target="__blank">
              Koffin Kats
            </a>
            <br />
            <a href="https://www.rockykaminski.com" target="__blank">
              Rocky Kaminski
            </a>
          </div>
          <p>
            <span className={showsStyles.venue}>Anchor Rock Club</span> <br />{" "}
            247 S New York Ave <br /> Atlantic City, NJ 08401
          </p>
          <p>Doors 7pm | Show 8pm</p>

          <a
            className={showsStyles.ticketsButton}
            href="https://www.tixr.com/groups/anchorrockclub/events/reverend-horton-heat-31498"
            target="__blank"
            title="Link to Tickets"
          >
            Get tickets
          </a>
        </div>
        <div className={showsStyles.posterWrapper}>
          <StaticImage src="../assets/rev-horton-heat-may30-new.jpg" />
        </div>
      </div>
      {/* single show */}
    </div>
  )
}

export default Shows
