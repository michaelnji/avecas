import svelte from "rollup-plugin-svelte-hot";
import Hmr from "rollup-plugin-hot";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import json from "@rollup/plugin-json";
const svelteConfig = require("./svelte.config.js");
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { copySync, removeSync } from "fs-extra";
const smelte = require("smelte/rollup-plugin-smelte");
import { spassr } from "spassr";
import getConfig from "@roxi/routify/lib/utils/config";
import autoPreprocess from "svelte-preprocess";
import tailwind from "tailwindcss";
import postcssImport from "postcss-import";
import { injectManifest } from "rollup-plugin-workbox";

const { distDir } = getConfig(); // use Routify's distDir for SSOT
const assetsDir = "assets";
const buildDir = `${distDir}/build`;
const isNollup = !!process.env.NOLLUP;
const production = !process.env.ROLLUP_WATCH;

// clear previous builds
removeSync(distDir);
removeSync(buildDir);

const serve = () => ({
    writeBundle: async () => {
        const options = {
            assetsDir: [assetsDir, distDir],
            entrypoint: `${assetsDir}/__app.html`,
            script: `${buildDir}/main.js`,
        };
        spassr({ ...options, port: 5000 });
        spassr({
            ...options,
            ssr: true,
            port: 5005,
            ssrOptions: { inlineDynamicImports: true, dev: true },
        });
    },
});
const copyToDist = () => ({
    writeBundle() {
        copySync(assetsDir, distDir);
    },
});

export default {
    preserveEntrySignatures: false,
    input: [`src/main.js`],
    output: {
        sourcemap: true,
        format: "esm",
        dir: buildDir,
        // for performance, disabling filename hashing in development
        chunkFileNames: `[name]${(production && "-[hash]") || ""}.js`,
    },
    plugins: [
        svelte({
            svelteConfig,
            emitCss: false,
            hot: isNollup,
            preprocess: [
                autoPreprocess({
                    postcss: { plugins: [postcssImport(), tailwind()] },
                    defaults: { style: "postcss" },
                }),
            ],
        }),
        smelte({
            purge: production,
            output: "public/global.css", // it defaults to static/global.css which is probably what you expect in Sapper
            postcss: [], // Your PostCSS plugins
            whitelist: [], // Array of classnames whitelisted from purging
            whitelistPatterns: [], // Same as above, but list of regexes
            // Any other props will be applied on top of default Smelte tailwind.config.js
        }),
        // json(),

        // resolve matching modules from current working directory
        resolve({
            browser: true,
            dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
        }),
        commonjs(),

        production && terser(),
        !production && !isNollup && serve(),
        !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
        !production && isNollup && Hmr({ inMemory: true, public: assetsDir }), // refresh only updated code
        {
            // provide node environment on the client
            transform: (code) => ({
                code: code.replace(
                    /process\.env\.NODE_ENV/g,
                    `"${process.env.NODE_ENV}"`
                ),
                map: { mappings: "" },
            }),
        },
        injectManifest({
            globDirectory: assetsDir,
            globPatterns: ["**/*.{js,css,svg}", "__app.html"],
            swSrc: `src/sw.js`,
            swDest: `${distDir}/serviceworker.js`,
            maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
            mode: "production",
        }),
        production && copyToDist(),
    ],
    watch: {
        clearScreen: false,
        buildDelay: 100,
    },
};
