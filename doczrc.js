const doczPluginGithubPage = require('docz-plugin-github-page');
export default {
  src: './documentation',
  base: "/react-native-share/",
  plugins: [doczPluginGithubPage()],
};
