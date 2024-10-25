import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroAlbumStyles from "./heroalbum.module.css"

const HeroAlbum = () => {
  return (
    <>
      {/* <div className={heroAlbumStyles.heroAlbumWrapper}>
        <div className={heroAlbumStyles.albumCover}>
          <a
            href="https://rockykaminski.bandcamp.com/album/bottomless-pit-the-cannibal-song"
            target="__blank"
            title="Image Link to Bandcamp"
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
            title="Link to Bandcamp"
          >
            listen on bandcamp
          </a>
        </div>
      </div> */}
      <div className={heroAlbumStyles.heroAlbumWrapper}>
        <div className={heroAlbumStyles.albumCover}>
          <a
            href="https://rockykaminski.bandcamp.com/album/live-from-the-garbage-truck"
            target="__blank"
            title="Image Link to Bandcamp"
          >
            <StaticImage
              src="../assets/livefromthegarbagetruckcover.jpg"
              alt="Bottomless Pit/The Cannibal Song album cover"
            />
          </a>
        </div>
        <div className={heroAlbumStyles.albumDetails}>
          <h2 className={heroAlbumStyles.albumTitle}>
            LIVE FROM THE GARBAGE TRUCK
          </h2>
          <p className={heroAlbumStyles.albumSubhead}>available now</p>
          <a
            className={heroAlbumStyles.listenButton}
            href="https://rockykaminski.bandcamp.com/album/live-from-the-garbage-truck"
            target="__blank"
            title="Link to Bandcamp"
          >
            listen on bandcamp
          </a>
        </div>
      </div>
    </>
  )
}

export default HeroAlbum
