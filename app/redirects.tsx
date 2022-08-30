import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import redirectsJson from './redirects.json';

const { redirects } = redirectsJson as { redirects: Array<[string, string]> };

export const loader: LoaderFunction = async ({ request }) => {
  const redirectRecord = (redirects as Array<[string, string]>).find(
    ([oldUrl]) => request.url.endsWith(oldUrl)
  );
  if (redirectRecord != null) {
    return redirect(redirectRecord[1], 301);
  } else {
    throw new Error(`Redirect URL not found: ${request.url}`);
  }
};
