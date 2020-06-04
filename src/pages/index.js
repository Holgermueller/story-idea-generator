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

    <Link to="/about" style={{ color: `black`, textDecoration: `none` }}>
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
        spacing={5}
      >
        <Grid item>
          <ProtagDisplay />
        </Grid>
        <Grid item>
          <ActionDisplay />
        </Grid>
        <Grid item>
          <RandomWordDisplay />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default IndexPage
