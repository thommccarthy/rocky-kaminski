import React from "react"
import Bio from "../components/bio"
import HeroAlbum from "../components/heroalbum"
import Layout from "../components/layout"
import Shows from "../components/shows"

export default function Home() {
  return (
    <Layout>
      <HeroAlbum />
      <Bio />
      <Shows />
    </Layout>
  )
}
