import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { IoIosArrowBack } from "react-icons/io"

const AboutPage = () => (
  <Layout>
    <SEO title="AboutPage" />

    <Link
      to="/"
      style={{ color: `black`, textDecoration: `none` }}
      aria-label="Back to home page"
    >
      <h2 style={{ padding: `0` }}>
        <IoIosArrowBack />
        Back
      </h2>
    </Link>

    <div
      style={{
        background: `#c5c6c7`,
        width: `95%`,
        margin: `5px auto`,
      }}
    >
      <div>
        <h1 style={{ fontStyle: `oblique`, padding: `8px` }}>
          Got the urge to write, but have no idea what to write about?
        </h1>
        <h2 style={{ padding: `8px` }}>Fear no more!</h2>
        <p style={{ padding: `8px` }}>
          This story idea generator chooses a protagonist, what they do, and who
          or what they do it to or for, for you.
        </p>
        <p style={{ padding: `8px` }}>
          Just click each of the buttons, and you now have a basic plot.
        </p>
        <p style={{ padding: `8px` }}>
          Don't like the basic idea you've been given, just press the buttons
          again.
        </p>
        <p style={{ padding: `8px` }}>
          Every effort has been take to make sure protagonist suggestions are
          not gender specific.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
