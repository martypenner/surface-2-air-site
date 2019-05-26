import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import incomingSrc from "./incoming.jpg"
import epSrc from "./s2a ep.jpg"
import victoryForTheDyingSrc from "./victory for the dying.jpg"

const Music = () => {
  return (
    <Layout title="Music">
      <div className="album-list">
        <div className="album">
          <h3>Victory For The Dying</h3>
          <h4>2008</h4>
          <img
            src={victoryForTheDyingSrc}
            alt="Victory for the Dying"
            title="Victory for the Dying"
            className="album-cover"
          />
          <ul className="song-list">
            <li>
              <strong>
                <Link to="/song/behind-the-lie">Behind the Lie</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/broken">Broken</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/inside-out">Inside Out</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/this-skin">This Skin</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/my-turn-on-victory-for-the-dying">My Turn</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/tired">Tired</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/sick-of-saying-goodbye">
                  Sick of Saying Goodbye
                </Link>
              </strong>
            </li>
          </ul>
        </div>
        <div className="album">
          <h3>Surface 2 Air EP</h3>
          <h4>2005</h4>
          <img
            src={epSrc}
            alt="Surface 2 Air EP"
            title="Surface 2 Air EP"
            className="album-cover"
          />
          <ul className="song-list">
            <li>
              <strong>
                <Link to="/song/by-fire">By Fire</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/unexpected">Unexpected</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/the-hate-song">The Hate Song</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/family-life">Family Life</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/who-we-are">Who We Are</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/downtime">Downtime</Link>
              </strong>
            </li>
          </ul>
        </div>
        <div className="album">
          <h3>Incoming</h3>
          <h4>2002</h4>
          <img
            src={incomingSrc}
            alt="Incoming"
            title="Incoming"
            className="album-cover"
          />
          <ul className="song-list">
            <li>
              <strong>
                <Link to="/song/waiting-room">Waiting Room</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/the-meaning-of-everything">
                  The Meaning Of Everything
                </Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/to-be-different">To Be Different</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/sss">SSS</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/time-with-you">Time With You</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/blind">Blind</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/my-turn">My Turn</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/rpp">RPP</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/these-clouds">These Clouds</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/beautiful-mystery">Beautiful Mystery</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/my-superman">My Superman</Link>
              </strong>
            </li>
            <li>
              <strong>
                <Link to="/song/dream">Dream</Link>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Music
