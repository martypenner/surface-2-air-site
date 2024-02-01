import type { MetaFunction } from '@remix-run/cloudflare';
import { metaV1 } from '@remix-run/v1-meta';

const title = 'SSS';
export const meta: MetaFunction = (args) =>
  metaV1(args, {
    title,
    'og:title': title,
    'twitter:title': title,
  });

export default function SSS() {
  return (
    <>
      <h3>
        <strong>SSS</strong>
      </h3>
      <br />
      <p>
        Sparked by hope, faith had built you up
        <br />
        You kept looking.&nbsp; You were one of us
        <br />
        You grew up strong and you made your stand
        <br />
        But my question is, why did you fade away?
        <br />
        <br />
        You were scattered, sown upon the rock
        <br />
        You rose up quickly but the soil wasn’t enough
        <br />
        Then the sun came up.&nbsp; You couldn’t stand the heat
        <br />
        So you withered away, dying in defeat
        <br />
        <br />
        &nbsp;&nbsp;&nbsp; It hurts me to see you like this
        <br />
        &nbsp;&nbsp;&nbsp; To see you fall into darkness
        <br />
        &nbsp;&nbsp;&nbsp; I never thought I’d see you like this
        <br />
        &nbsp;&nbsp;&nbsp; But the question still rises
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '}
        <br />
        &nbsp;&nbsp;&nbsp; Where has the fire gone?
        <br />
        <br />
        When I first saw you, I saw you as a flame
        <br />
        You were sharing your wealth and bearing Jesus’ name
        <br />
        You took up His cross and you followed your King
        <br />
        It seems you have disappeared because your light isn’t burning
      </p>
    </>
  );
}
