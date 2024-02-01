import type { MetaFunction } from '@remix-run/cloudflare';
import { metaV1 } from '@remix-run/v1-meta';

const title = 'The Meaning of Everything';
export const meta: MetaFunction = (args) =>
  metaV1(args, {
    title,
    'og:title': title,
    'twitter:title': title,
  });

export default function TheMeaningOfEverything() {
  return (
    <>
      <h3>
        <strong>The Meaning Of Everything</strong>
      </h3>
      <br />
      <p>
        Some times everything seems to go wrong
        <br />
        Life is so hard, you don’t want to carry on
        <br />
        And all that matters is your friends
        <br />
        How could you replace Jesus with them?
        <br />
        <br />
        &nbsp;&nbsp;&nbsp; You are everything and everything is all I want
        <br />
        &nbsp;&nbsp;&nbsp; You are everything.&nbsp; My everything is God
        <br />
        &nbsp;&nbsp;&nbsp; You are everything and everything is all I need
        <br />
        &nbsp;&nbsp;&nbsp; You are everything, Yeah, You mean everything to me.
        <br />
        &nbsp;&nbsp;&nbsp; Everything to me
        <br />
        <br />
        Complaints of jealousy is what I hear
        <br />
        Your life goes down the drain and you break into tears
        <br />
        Because of this your life isn’t worth to live?
        <br />
        How could you forget the man who knows where you’ve been
        <br />
        <br />
        &nbsp;&nbsp;&nbsp; What would it profit you to gain the world?
        <br />
        &nbsp;&nbsp;&nbsp; What would it profit you if you would lose your soul?
        <br />
        &nbsp;&nbsp;&nbsp; What would it profit you to gain the world?
        <br />
        &nbsp;&nbsp;&nbsp; What would it profit you?&nbsp; What would you want
        more?
      </p>
    </>
  );
}
