
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['e4qXpFP5tWzGzXi3FLKd23'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  