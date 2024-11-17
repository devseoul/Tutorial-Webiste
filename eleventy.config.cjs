module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");
};

module.exports = function(eleventyConfig) {
  return {
    pathPrefix: "/Tutorial-Webiste/",
  };
};

module.exports = function(eleventyConfig) {
    return {
        dir: {
            output: "_site" // Sicherstellen, dass der Output-Ordner korrekt ist
        }
    };
};

