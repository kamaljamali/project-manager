'use strict';

let mix = require('laravel-mix');

mix.setPublicPath('public');
if (process.env.NODE_ENV === 'development') {
    mix.sourceMaps();
    mix.version();
}

/* JS */
mix.js('front-end/js/core/app.js', 'public/js/core')
    .js('front-end/js/pages/home/index.js', 'public/js/pages/home');

/* SASS */
mix.sass('front-end/sass/core/app.scss', 'public/css/core');
