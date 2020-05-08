import React from "react"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Connect = () => (
  <div
    style={{
      margin: "auto",
      width: `15%`,
    }}
  >
    <ul
      style={{
        display: "flex",
        listStyle: `none`,
        justifyContent: `space-evenly`,
      }}
    >
      <li>
        <a
          href="https://twitter.com/thatHMMueller"
          style={{ color: `#1f2833` }}
        >
          <h1>
            <AiOutlineTwitter />
          </h1>
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/holgerj9/"
          style={{ color: `#1f2833` }}
        >
          <h1>
            <AiFillInstagram />
          </h1>
        </a>
      </li>
    </ul>
  </div>
)

export default Connect
