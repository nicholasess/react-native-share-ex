const doczPluginGithubPage = require('docz-plugin-github-page');
export default {
  src: './documentation',
  base: '/react-native-share-ex/',
  hashRouter: true,
  plugins: [doczPluginGithubPage()],
};
