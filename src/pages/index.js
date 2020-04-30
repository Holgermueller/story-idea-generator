import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontStyle: `italic` }}>Welcome to MeanStreak</h1>
    <h3 style={{ fontFamily: `sans-serif` }}>
      The cartoon strip no one asked for!
    </h3>

    <div style={{ background: `ghostwhite`, padding: `10px` }}>
      <p style={{ fontFamily: `sans-serif` }}>
        Today's awesome cartoon/crime against nature and humanity:
      </p>

      <img
        src="#"
        alt="Today's awesome cartoon/crime against nature and humanity seems to be experiencing technical difficulties. We apologize for any inconvenience or trauma this may have caused."
        height="200px"
        width="200px"
      />
    </div>
  </Layout>
)

export default IndexPage
