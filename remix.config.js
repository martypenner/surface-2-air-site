const { redirects } = require('./app/redirects.json');

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",

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
