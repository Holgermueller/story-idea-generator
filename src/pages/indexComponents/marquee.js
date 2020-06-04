import React from "react"

const Marquee = () => (
  <div
    style={{
      background: `#66fcf1`,
      paddingTop: `10px`,
      width: `100%`,
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
      <li
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Protagonist
      </li>
      <li style={{ color: `black` }}>|</li>
      <li
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Action
      </li>
      <li style={{ color: `black` }}>|</li>
      <li
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        Random Word
      </li>
    </ul>
  </div>
)

export default Marquee
