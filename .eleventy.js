/* jshint esversion:6 */

module.exports = (function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.ignores.add("README.md");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            output: "docs"
        }
    };
    
});