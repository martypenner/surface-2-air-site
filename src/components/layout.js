import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = () => {
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
        <div id="main">
          <div className="view view-news view-id-news view-display-id-page_1 view-dom-id-1">
            <div className="view-content">
              <div className="views-row views-row-1 views-row-odd views-row-first">
                <div className="views-field-title">
                  <span className="field-content">
                    S2A APPAREL NOW AVAILABLE TO EVERYONE!!
                  </span>
                </div>

                <div className="views-field-created">
                  <span className="field-content">October 12, 2013</span>
                </div>

                <div className="views-field-body">
                  <div className="field-content">
                    <p>
                      <span>Hello again!</span>
                    </p>
                    <p>
                      <span />
                      <span>
                        Ever wondered how to get you hands on S2A apparel? There
                        is a way! At the moment, we have 2 designs up on
                        LabelState.com which you can buy in either men's or
                        womens shirts.
                        <br />
                        We are working on getting more S2A designs uploaded and
                        ready for you to purchase!
                      </span>
                      <br />
                      <br />
                      <a
                        href="http://labelstate.com/products/bleeding-heart"
                        target="_blank"
                      >
                        http://labelstate.com/products/bleeding-heart
                      </a>
                      <br />
                      <br />
                      <a
                        href="http://labelstate.com/products/birds"
                        target="_blank"
                      >
                        http://labelstate.com/products/birds
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="views-row views-row-2 views-row-even">
                <div className="views-field-title">
                  <span className="field-content">
                    SURFACE 2 AIR PLAYING WITH THEORY OF A DEADMAN?!
                  </span>
                </div>

                <div className="views-field-created">
                  <span className="field-content">October 12, 2013</span>
                </div>

                <div className="views-field-body">
                  <div className="field-content">
                    <p>It is possible!</p>
                    <p>
                      We just uploaded our video for{" "}
                      <a href="http://www.youtube.com/watch?v=i5kgR7YQCUI">
                        Behind the Lie
                      </a>{" "}
                      to{" "}
                      <a href="http://www.lcbo.com/whiskyrocks/competition/showdown.shtml">
                        WhiskyRocks.com
                      </a>{" "}
                      and we need your votes to get us on stage with Theory of a
                      Deadman.&nbsp;
                    </p>
                  </div>
                </div>
              </div>
              <div className="views-row views-row-3 views-row-odd views-row-last">
                <div className="views-field-title">
                  <span className="field-content">BABY TRUMPS GIG</span>
                </div>

                <div className="views-field-created">
                  <span className="field-content">February 28, 2013</span>
                </div>

                <div className="views-field-body">
                  <div className="field-content">
                    <p />
                    <p>Hey folks,</p>
                    <p>We have some exciting news and some sad news.</p>
                    <p>
                      First the sad; we will NOT be making it to the show this
                      Saturday, March 2nd due to some exciting news. Abe Miller
                      (bass player) just became a father on Tuesday to a
                      handsome little boy! It is difficult to apologize in a
                      situation like this so, we'll just make it up to you guys
                      next time. In the mean time, check out all the bands that
                      are still playing on Saturday.
                    </p>
                    <p>Thanks for understanding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
