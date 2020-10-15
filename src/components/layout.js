import React from "react"
import { Link , graphql, StaticQuery, useStaticQuery} from "gatsby"
import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {

    const data = useStaticQuery(
        graphql`
            query {
                site{
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header style={{ marginBottom: `1.5 rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>

        <ul css={css`
            float: right;
        `}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </header>

      {children}
    </div>
  )
}
