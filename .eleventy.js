module.exports = (function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.ignores.add("README.md");
    return {
        dir: {
          output: "docs"
        }
      }
});