import React from "react"
import Bio from "../components/bio"
import HeroAlbum from "../components/heroalbum"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <HeroAlbum />
      <Bio />
    </Layout>
  )
}
