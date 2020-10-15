import React from "react"

import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1> Hi! I'm building a Gatsby Site</h1>
      <div>
        <img
          src="https://source.unsplash.com/random/400x200"
          alt="Some random image here"
        />
      </div>
      <p>What a world! I would love to create websites with you 😂</p>
    </Layout>
  )
}
