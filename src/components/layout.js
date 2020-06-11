/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Connect from "./connect"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        style={{ position: `fixed` }}
        siteTitle={data.site.siteMetadata.title}
      />

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          style={{
            backgroundImage: `url('../images/notebook-with-blank-pages-942872.png')`,
          }}
        >
          {children}
        </main>

        <footer style={{ fontFamily: `sans-serif`, marginTop: `15px` }}>
          © {new Date().getFullYear()} | Holger Mueller | Built with
          {` `}
          <a
            style={{ textDecoration: `none`, color: `#45a29e` }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
        </footer>
      </div>
      <Connect />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
