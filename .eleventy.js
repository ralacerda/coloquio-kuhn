const { title, button } = require("./src/shortcodes");

const Image = require("@11ty/eleventy-img");
const path = require("path");

const imageShortcode = async (
  src,
  alt,
  widths = "192",
  formats = "webp",
  sizes = "100vw"
) => {
  const imageMetadata = await Image(src, {
    widths: widths,
    formats: formats,
    outputDir: "dist/img/",
    urlPath: "/coloquio-kuhn/img",
    filenameFormat: function (id, src, width, format, options) {
      // id: hash of the original image
      // src: original image path
      // width: current width in px
      // format: current file format
      // options: set of options passed to the Image call

      return `f${id}-${width}.${format}`;
    },
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(imageMetadata, imageAttributes);
};

module.exports = function (eleventyConfig) {
  // PassthroughCopy
  eleventyConfig.addPassthroughCopy("src/img/hero");
  eleventyConfig.addPassthroughCopy("src/img/icons");
  eleventyConfig.addPassthroughCopy("src/img/logos");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "alpine.js",
  });
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  // Shortcodes
  eleventyConfig.addNunjucksShortcode("title", title);
  eleventyConfig.addNunjucksShortcode("button", button);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Config Object
  return {
    // Data folders
    dir: {
      input: "src",
      output: "dist",
      data: "data",
      includes: "includes",
      layouts: "layouts",
    },

    // Override template plugin
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    // Path prefix
    pathPrefix: "/coloquio-kuhn/",
  };
};
