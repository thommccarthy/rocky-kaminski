import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as heroAlbumStyles from "./heroalbum.module.css"

const HeroAlbum = () => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const [overlayImage, setOverlayImage] = useState("")

  const handleImageClick = imageSrc => {
    setOverlayImage(imageSrc.default) // Add .default here
    setOverlayVisible(true)
  }

  const handleOverlayClose = () => {
    setOverlayVisible(false)
  }

  return (
    <>
      {/* <div className={heroAlbumStyles.heroAlbumWrapper}>
        <div className={heroAlbumStyles.albumCover}>
          <div
            className={heroAlbumStyles.imageWrapper}
            onClick={() =>
              handleImageClick(require("../assets/bottomless-cover.jpg"))
            }
            title="Click to view full album cover"
            tabIndex="0"
            role="button"
          >
            <StaticImage
              src="../assets/bottomless-cover.jpg"
              alt="Bottomless Pit/The Cannibal Song album cover"
              className={heroAlbumStyles.hoverImage}
            />
            <div className={heroAlbumStyles.imageOverlay}>
              <span className={heroAlbumStyles.overlayIcon}>+</span>
            </div>
          </div>
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
          <div
            className={heroAlbumStyles.imageWrapper}
            onClick={() =>
              handleImageClick(
                require("../assets/livefromthegarbagetruckcover.jpg")
              )
            }
            title="Click to view full album cover"
            tabIndex="0"
            role="button"
          >
            <StaticImage
              src="../assets/livefromthegarbagetruckcover.jpg"
              alt="Live from the Garbage Truck album cover"
              className={heroAlbumStyles.hoverImage}
            />
            <div className={heroAlbumStyles.imageOverlay}>
              <span className={heroAlbumStyles.overlayIcon}>+</span>
            </div>
          </div>
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

      {overlayVisible && (
        <div className={heroAlbumStyles.overlay} onClick={handleOverlayClose}>
          <div className={heroAlbumStyles.overlayContent}>
            <button
              className={heroAlbumStyles.closeButton}
              onClick={handleOverlayClose}
              aria-label="Close full image overlay"
            >
              &times;
            </button>
            <img
              src={overlayImage}
              alt="Album cover in full size"
              className={heroAlbumStyles.fullImage}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default HeroAlbum
