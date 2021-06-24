const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], {
  imagesFolder: 'images',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  target: 'serverless',
});
