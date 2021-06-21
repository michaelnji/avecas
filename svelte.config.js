const sveltePreprocess = require("svelte-preprocess");
const makeAttractionsImporter = require("attractions/importer.js");
const path = require("path");
module.exports = {
    preprocess: [
        sveltePreprocess({
            scss: {
                importer: makeAttractionsImporter({
                    themeFile: "./src/static/css/theme.scss",
                }),
            },
        }),
    ],
};
