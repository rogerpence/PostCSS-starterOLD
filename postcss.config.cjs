const openProps = require("open-props");

module.exports = {
  map: { inline: true },
  plugins: [
    require("postcss-import"),
    require("postcss-nesting"),
    require("postcss-custom-media"),
    require("postcss-media-minmax"),
    // require('postcss-preset-env')({
    //     stage: 0,
    //     features: {
    //     }
    // }),
    require("postcss-jit-props")(openProps),
    //require("postcss-jit-props")({ files: ["./open-props.css"] }),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
