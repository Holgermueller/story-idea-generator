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
          Well not a dream per se. It was more like a man whose job involved a
          lot of mindless tasks. While performing these mindless tasks, he
          daydreamed, and these are the kind of thoughts that ran through his
          head. They ran through his head non-stop. He needed to get them out.
          And so, here they are.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
