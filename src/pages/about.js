import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />
    <h1 style={{ fontStyle: `oblique` }}>MeanStreak,</h1>

    <Link to="/">
      <h2 style={{ padding: `0` }}>Back</h2>
    </Link>

    <div
      style={{
        background: `#c5c6c7`,
        width: `95%`,
        margin: `5px auto`,
      }}
    >
      <div>
        <p style={{ padding: `8px` }}></p>
        <p style={{ padding: `8px` }}></p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
