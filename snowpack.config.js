// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        /* see options below */
      },
      '@snowpack/plugin-webpack',
      {
        /* see "Plugin Options" below */
      },
      '@snowpack/plugin-run-script',
      {
        cmd: 'node copyfile.js', // production build command
        watch: 'node copyfile.js', // (optional) dev server command
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
