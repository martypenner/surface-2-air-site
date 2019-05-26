import React from "react"
import Layout from "../components/layout"
import victoryForTheDyingSrc from "./victory for the dying.jpg"
import epSrc from "./s2a ep.jpg"
import incomingSrc from "./incoming.jpg"

const Music = () => {
  return (
    <Layout>
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
                <a href="/song/behind-the-lie">Behind the Lie</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/broken">Broken</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/inside-out">Inside Out</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/this-skin">This Skin</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/my-turn-on-victory-for-the-dying">My Turn</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/tired">Tired</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/sick-of-saying-goodbye">
                  Sick of Saying Goodbye
                </a>
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
                <a href="/song/by-fire">By Fire</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/unexpected">Unexpected</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/the-hate-song">The Hate Song</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/family-life">Family Life</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/who-we-are">Who We Are</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/downtime">Downtime</a>
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
                <a href="/song/waiting-room">Waiting Room</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/the-meaning-of-everything">
                  The Meaning Of Everything
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/to-be-different">To Be Different</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/sss">SSS</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/time-with-you">Time With You</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/blind">Blind</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/my-turn">My Turn</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/rpp">RPP</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/these-clouds">These Clouds</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/beautiful-mystery">Beautiful Mystery</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/my-superman">My Superman</a>
              </strong>
            </li>
            <li>
              <strong>
                <a href="/song/dream">Dream</a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Music
