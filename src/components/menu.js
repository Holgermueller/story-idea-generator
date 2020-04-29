import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      background: `#66fcf1`,
      paddingTop: `10px`,
      width: `95%`,
      margin: ` auto`,
    }}
  >
    <ul
      style={{
        display: `flex`,
        listStyle: `none`,
        justifyContent: `space-evenly`,
        fontFamily: `sans-serif`,
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </li>
      <li style={{ color: `black` }}>|</li>
      <li>
        <Link
          to="/archives"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Archives
        </Link>
      </li>
      <li style={{ color: `black` }}>|</li>
      <li>
        <Link
          to="/about"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Menu
