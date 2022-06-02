import React from "react"
import Bio from "../components/bio"
import HeroAlbum from "../components/heroalbum"
import Layout from "../components/layout"
import Shows from "../components/shows"
import VideoCarousel from "../components/videoCarousel"

export default function Home() {
  return (
    <Layout>
      <HeroAlbum />
      <Bio />
      <Shows />
      <VideoCarousel />
    </Layout>
  )
}
