/* eslint-env node */
const path = require('path');
const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    // Include the ESLint configuration
    eslint: { warnings: true, errors: true },

    // Boot files
    boot: [],

    // CSS files
    css: ['app.scss'],

    // Add the extra fonts
    extras: ['fontawesome-v6', 'roboto-font', 'material-icons'],

    // Configure Vite with an alias for the src folder
    vite: { resolve: { alias: { '@': path.resolve(__dirname, 'src') } } },

    build: {
      // Extend the Vite configuration
      extendViteConf(viteConf) {
        viteConf.resolve.alias['@'] = path.resolve(__dirname, 'src');
      },

      // Set the target browsers and Node.js version
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
      },

      // Set the Vue Router mode
      vueRouterMode: 'hash',
    },

    // Configure the development server
    devServer: { open: true },

    // Configure the Quasar framework settings
    framework: { config: {}, iconSet: 'fontawesome-v6', plugins: [] },

    // Animations
    animations: [],

    // SSR settings
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },

    // PWA settings
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },

    // Cordova settings
    cordova: {},

    // Capacitor settings
    capacitor: { hideSplashscreen: true },

    // Electron settings
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: { appId: 'knightforge' },
    },

    // BEX settings
    bex: { contentScripts: ['my-content-script'] },
  };
});
