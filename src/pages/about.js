import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />
    <h1 style={{ fontStyle: `oblique` }}>MeanStreak</h1>
    <h2 style={{ padding: `0` }}>A Life</h2>

    <div
      style={{
        background: `#c5c6c7`,
        width: `95%`,
        margin: `5px auto`,
      }}
    >
      <div>
        <p style={{ padding: `4px 8px` }}>
          MeanStreak began with a man and a dream.
        </p>
        <p style={{ padding: `4px 8px` }}>
          Well not a dream per se. It was more like a man with a lot of time on
          his hands and a need to occupy it somehow.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
