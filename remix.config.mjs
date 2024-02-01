import { createRoutesFromFolders } from '@remix-run/v1-route-convention';

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
  // Tell Remix to ignore everything in the routes directory.
  // We'll let `createRoutesFromFolders` take care of that.
  ignoredRouteFiles: ['**/*'],
  cacheDirectory: './node_modules/.cache/remix',
  server: './server.ts',
  serverBuildPath: 'functions/[[path]].js',
  serverConditions: ['workerd', 'worker', 'browser'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",

  routes: (defineRoutes) => {
    // `createRoutesFromFolders` will create routes for all files in the
    // routes directory using the same default conventions as Remix v1.
    return createRoutesFromFolders(defineRoutes, {
      // If you're already using `ignoredRouteFiles` in your Remix config,
      // you can move them to `ignoredFilePatterns` in the plugin's options.
      ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
    });
  },
};
