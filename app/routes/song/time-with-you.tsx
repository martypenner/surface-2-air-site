import type { MetaFunction } from '@remix-run/node';

const title = 'Time with You';
export const meta: MetaFunction = () => ({
  title,
  'og:title': title,
  'twitter:title': title,
});

export default function TimeWithYou() {
  return (
    <>
      <h3>
        <strong>Time With You</strong>
      </h3>
      <br />
      <p>
        Every morning I get out of bed and forget about You
        <br />I rush into my day thinking of what I’m going to do
        <br />
        And I start to wonder why I’m weak and can’t carry on
        <br />
        You said I didn’t ask, I didn’t seek, I didn’t knock
        <br />
        <br />
        &nbsp;&nbsp;&nbsp; I didn’t knock, I didn’t ask, I didn’t seek You first
        <br />
        &nbsp;&nbsp;&nbsp; I didn’t knock, I didn’t seek, I didn’t ask You, God
        <br />
        &nbsp;&nbsp;&nbsp; I didn’t knock, I didn’t ask, I didn’t seek You first
        <br />
        &nbsp;&nbsp;&nbsp; I didn’t seek, I didn’t ask, I didn’t knock on Your
        door
        <br />
        <br />I seem to be living a separate life.&nbsp; A life apart from You
        <br />I know You know my thoughts, my heart.&nbsp; I know that You
        already knew
        <br />
        And I realize what in me I now have to change
        <br />
        And no matter what I do, I’ll start and end my days . . .<br />
        <br />
        &nbsp;&nbsp;&nbsp; With You.&nbsp; I wanna praise You
        <br />
        &nbsp;&nbsp;&nbsp; With You.&nbsp; To grow close to You
        <br />
        &nbsp;&nbsp;&nbsp; With You.&nbsp; I wanna get to know You
        <br />
        &nbsp;&nbsp;&nbsp; With You.&nbsp; I wanna talk to You
        <br />
        <br />
        &nbsp;&nbsp;&nbsp; How could I forget that You are always there?
        <br />
        &nbsp;&nbsp;&nbsp; How could I reject some more time in prayer?
        <br />
        &nbsp;&nbsp;&nbsp; How could I forget that You are always there?
        <br />
        &nbsp;&nbsp;&nbsp; How could I reject some more time with You?
      </p>
    </>
  );
}
