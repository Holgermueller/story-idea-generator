import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
import Marquee from "./indexComponents/marquee"
import ProtagDisplay from "./indexComponents/protagDisplay"
import ActionDisplay from "./indexComponents/actionDisplay"
import RandomWordDisplay from "./indexComponents/randomWordDisplay"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontStyle: `italic` }}>Get your story started!</h1>

    <Link
      to="/about"
      style={{ color: `black`, textDecoration: `none` }}
      aria-label="Find out how this app works"
    >
      <h3 style={{ fontFamily: `sans-serif` }}>
        How it works <AiOutlineArrowRight />
      </h3>
    </Link>

    <Marquee />

    <div style={{ background: `ghostwhite`, padding: `10px` }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item style={{ marginLeft: "auto", marginRight: "auto" }}>
          <ProtagDisplay />
        </Grid>
        <Grid item style={{ marginLeft: "auto", marginRight: "auto" }}>
          <ActionDisplay />
        </Grid>
        <Grid item style={{ marginLeft: "auto", marginRight: "auto" }}>
          <RandomWordDisplay />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default IndexPage
