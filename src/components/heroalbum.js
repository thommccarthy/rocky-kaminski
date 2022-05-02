import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroAlbumStyles from "./heroalbum.module.css"

const HeroAlbum = () => {
  return (
    <div className={heroAlbumStyles.heroAlbumWrapper}>
      <div className={heroAlbumStyles.albumCover}>
        <a
          href="https://rockykaminski.bandcamp.com/album/bottomless-pit-the-cannibal-song"
          target="__blank"
        >
          <StaticImage
            src="../assets/bottomless-cover.jpg"
            alt="Bottomless Pit/The Cannibal Song album cover"
          />
        </a>
      </div>
      <div className={heroAlbumStyles.albumDetails}>
        <h2 className={heroAlbumStyles.albumTitle}>
          BOTTOMLESS PIT/THE CANNIBAL SONG
        </h2>
        <p className={heroAlbumStyles.albumSubhead}>available now</p>
        <a
          className={heroAlbumStyles.listenButton}
          href="https://rockykaminski.bandcamp.com/album/bottomless-pit-the-cannibal-song"
          target="__blank"
        >
          listen on bandcamp
        </a>
      </div>
    </div>
  )
}

export default HeroAlbum
