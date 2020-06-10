import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { AiOutlineArrowRight } from "react-icons/ai"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"
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

    <div style={{ background: `ghostwhite`, padding: `10px` }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        spacing={2}
      >
        <Grid
          item
          style={{ marginLeft: "auto", marginRight: "auto" }}
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          <ProtagDisplay />
        </Grid>
        <Grid
          item
          style={{ marginLeft: "auto", marginRight: "auto" }}
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          <ActionDisplay />
        </Grid>
        <Grid
          item
          style={{ marginLeft: "auto", marginRight: "auto" }}
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        >
          <RandomWordDisplay />
        </Grid>
      </Grid>
    </div>
  </Layout>
)

export default IndexPage
