"use strict";

const mix = require("laravel-mix");
require("laravel-mix-alias");

mix.setPublicPath("public");
if (process.env.NODE_ENV === "development") {
    mix.sourceMaps();
}
mix.version();

/* Aliases */
mix.alias({
    "@PUBLIC": "public",
    "@VALIDATION": "front-end/validation",
    "@JS": "front-end/js",
    "@SASS": "front-end/sass",
    "@VIEWS": "front-end/views",
    "@IMAGES": "front-end/images",
    "@FONTS": "front-end/fonts",
    "@HELPERS": "front-end/js/helpers",
    "@REQUEST": "front-end/js/request-helpers",
    "@VUE": "front-end/vue",
    "@VUEC": "front-end/vue/components",
    "@VUEX": "front-end/vue/vuex",
});

/**
 *  Webpack config
 */
mix.webpackConfig({
    module: {
        rules: [{
            test: /\.pug$/,
            oneOf: [{
                    resourceQuery: /^\?vue/,
                    use: ["pug-plain-loader"],
                },
                {
                    use: ["raw-loader", "pug-plain-loader"],
                },
            ],
        }, ],
    },
});

/* JS */
mix.js("front-end/js/core/app.js", "public/js/core")
    .js("front-end/js/pages/home/index.js","public/js/pages/home")
    .js("front-end/js/pages/project/index.js","public/js/pages/project");

/* SASS */
mix.sass("front-end/sass/core/app.scss", "public/css/core").sass(
    "front-end/sass/pages/home.index.scss",
    "public/css/pages"
);

/* Copy directory */
mix.copyDirectory("front-end/images", "public/images");
