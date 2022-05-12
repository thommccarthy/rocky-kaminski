import React from "react"
import * as showsStyles from "./shows.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Shows = () => {
  return (
    <div id="shows" className={showsStyles.showsWrapper}>
      <h2 className={showsStyles.header}>Shows</h2>
      <div className={showsStyles.singleShowWrapper}>
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
    </div>
  )
}

export default Shows
