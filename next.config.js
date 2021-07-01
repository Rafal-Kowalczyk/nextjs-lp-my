const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], {
  target: 'serverless',
  imagesFolder: 'images',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
});
