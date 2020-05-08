import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />
    <h1 style={{ fontStyle: `oblique` }}>MeanStreak,</h1>
    <h2 style={{ padding: `0` }}>A Life</h2>
    <div
      style={{
        background: `#c5c6c7`,
        width: `95%`,
        margin: `5px auto`,
      }}
    >
      <div>
        <p style={{ padding: `8px` }}>
          MeanStreak began with a man and a dream.
        </p>
        <p style={{ padding: `8px` }}>
          Well not a dream per se. It was more like a man whose job involved a
          lot of mindless tasks. While performing these mindless tasks, he
          daydreamed, and these are some of the thoughts that ran through his
          head. They ran through his head non-stop that he needed to find a way
          to get them out. Once they were out, he got sick of looking at them by
          himself. If he had to suffer, that didn't mean he had to suffer alone.
          Misery loves company, as they say. And so, here is MeanStreak, for no
          one's pleasure.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
