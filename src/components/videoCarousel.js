import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import * as videoCarouselStyles from "./videoCarousel.module.css"
import { Carousel } from "react-responsive-carousel"

const VideoCarousel = () => {
  return (
    <div id="video" className={videoCarouselStyles.carouselWrapper}>
      <h2>VIDEO</h2>

      <div className={videoCarouselStyles.videoWrapper}>
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/1rzW3XIQTQk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}
export default VideoCarousel
