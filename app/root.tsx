import type { MetaFunction } from '@remix-run/cloudflare';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { metaV1 } from '@remix-run/v1-meta';
import styles from '~/styles/global.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const description = `The official website of Surface 2 Air, an alternative metal band from Aylmer, Ontario.`;

export const meta: MetaFunction = ({ location, ...args }) => {
  const pathParts = location.pathname.split('/').filter(Boolean);
  const lastPart = pathParts[pathParts.length - 1];
  const capitalizedTitle = lastPart
    ?.replace(/[-_]/gi, ' ')
    .replace(/^\w/, (char) => char.toUpperCase())
    .trim();
  const title =
    (capitalizedTitle ? capitalizedTitle + ' | ' : '') +
    'Surface 2 Air Official';

  return metaV1(
    { location, ...args },
    {
      charset: 'utf-8',
      title,
      description,
      viewport: 'width=device-width,initial-scale=1',
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'twitter:card': 'summary',
      'twitter:creator': 'Marty Penner',
      'twitter:title': title,
      'twitter:description': description,
    }
  );
};

export function CatchBoundary() {
  return (
    <>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
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
            <main id="main">
              <Outlet />
            </main>
          </div>

          <footer id="footer">
            <p>© {new Date().getFullYear()} Marty Penner and Surface 2 Air</p>
          </footer>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
