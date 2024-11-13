module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");
};

module.exports = {
    dir: {
        input: "src",
        output: "docs"
    }
};
