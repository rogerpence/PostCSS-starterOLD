const openProps = require("open-props");

// console.log(openProps);

module.exports = {
  map: { inline: true },
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    require("postcss-media-minmax"),
    require("postcss-jit-props")([openProps]),
    // require("postcss-preset-env")({
    //   "custom-media-queries": true,
    // }),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
