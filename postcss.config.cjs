const cssnano = require("cssnano");
const openProps = require("open-props");
const postcssCustomMedia = require("postcss-custom-media");
const postcssGlobalData = require("@csstools/postcss-global-data");
const postcssImport = require("postcss-import");
const postcssJitProps = require("postcss-jit-props");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: [
    postcssImport(),
    postcssGlobalData({
      files: ["node_modules://open-props/media.min.css"],
    }),
    postcssCustomMedia({
      preserve: false,
    }),
    postcssJitProps(openProps),
    postcssNesting(),

    //cssnano(),
  ],
};
