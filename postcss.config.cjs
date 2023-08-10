const openProps = require("open-props");

module.exports = {
  map: { inline: true },
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    require("postcss-media-minmax"),
    require("postcss-jit-props")(openProps),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
