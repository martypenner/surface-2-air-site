import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SEO from "./seo"

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <div id="wrapper">
        <div id="left-sidebar">
          <div id="links">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/surface2airband/"
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
                <Link id="home" to="/" />
              </li>
              <li>
                <Link id="blog" to="/blog" />
              </li>
              <li>
                <Link id="shows" to="/shows" />
              </li>
              <li>
                <Link id="bio" to="/bio" />
              </li>
              <li>
                <Link id="music" to="/music" />
              </li>
              <li>
                <Link id="contact" to="/contact-us" />
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
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
