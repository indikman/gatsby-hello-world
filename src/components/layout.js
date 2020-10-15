import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5 rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Indika Wijesooriya</h3>
        </Link>

        <ul style={{ display: `inline`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </header>

      {children}
    </div>
  )
}