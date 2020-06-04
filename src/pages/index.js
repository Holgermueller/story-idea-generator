import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "gatsby"
import Marquee from "./indexComponents/marquee"
import ProtagDisplay from "./indexComponents/protagDisplay"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontStyle: `italic` }}>Get your story started!</h1>

    <Link to="/about" style={{ color: `black`, textDecoration: `none` }}>
      <h3 style={{ fontFamily: `sans-serif` }}>
        How it works <AiOutlineArrowRight />
      </h3>
    </Link>

    <Marquee />

    <div style={{ background: `ghostwhite`, padding: `10px` }}>
      <ProtagDisplay />
    </div>
  </Layout>
)

export default IndexPage
