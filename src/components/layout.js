import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <div id="left-sidebar">
        <div id="links">
          <ul>
            <li>
              <a
                href="http://www.facebook.com/group.php?gid=2261736061"
                id="facebook"
              />
            </li>
            <li className="clear">
              <a href="http://www.myspace.com/surface2air" id="myspace" />
            </li>
          </ul>
        </div>
      </div>

      <div id="page-head">
        <div id="top" />
        <div id="menu">
          <ul>
            <li>
              <a id="home" href="/" />
            </li>
            <li>
              <a id="blog" href="/blog" />
            </li>
            <li>
              <a id="shows" href="/shows" />
            </li>
            <li>
              <a id="bio" href="/bio" />
            </li>
            <li>
              <a id="music" href="/music" />
            </li>
            <li>
              <a id="contact" href="/contact-us" />
            </li>
          </ul>
        </div>
      </div>

      <div id="right-sidebar" />

      <div id="content">
        <main id="main">{children}</main>
      </div>

      <footer id="footer">
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
