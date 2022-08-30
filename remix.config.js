const { redirects } = require('./app/redirects.json');

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],

  routes: async (defineRoutes) => {
    // If you need to do async work, do it before calling `defineRoutes`, we use
    // the call stack of `route` inside to set nesting.

    // todo: this isn't working for some reason
    return defineRoutes((route) => {
      redirects.forEach(([oldUrl]) => {
        route(oldUrl, 'redirects.tsx');
      });
    });
  },
};
