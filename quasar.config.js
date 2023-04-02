/* eslint-env node */
const path = require('path');
const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    eslint: { warnings: true, errors: true },
    boot: [],
    css: ['app.scss'],
    extras: ['fontawesome-v6', 'roboto-font', 'material-icons'],
    vite: { resolve: { alias: { '@': path.resolve(__dirname, 'src') } } },
    build: {
      extendViteConf(viteConf) {
        viteConf.resolve.alias['@'] = path.resolve(__dirname, 'src');
      },
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
      },
      vueRouterMode: 'hash',
    },
    devServer: { open: true },
    framework: { config: {}, iconSet: 'fontawesome-v6', plugins: [] },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render'],
    },
    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
    cordova: {},
    capacitor: { hideSplashscreen: true },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: { appId: 'knightforge' },
    },
    bex: { contentScripts: ['my-content-script'] },
  };
});
