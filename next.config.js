const optimizedImages = require("next-optimized-images");

module.exports = optimizedImages({
  reactStrictMode: true,
  images: {
    // NOTE necessary for next-optimized images
    disableStaticImages: true,
  },
  // optimizeImages
  handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
});
