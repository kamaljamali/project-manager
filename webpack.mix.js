'use strict';

const mix = require('laravel-mix');
require('laravel-mix-alias');

mix.setPublicPath('public');
if (process.env.NODE_ENV === 'development') {
    mix.sourceMaps();
}
mix.version();

/* Aliases */
mix.alias({
    '@JS': 'front-end/js',
    '@SASS': 'front-end/sass',
    '@VIEWS': 'front-end/views',
    '@IMAGES': 'front-end/images',
    '@FONTS': 'front-end/fonts'
});

/* JS */
mix.js('front-end/js/core/app.js', 'public/js/core')
    .js('front-end/js/pages/home/index.js', 'public/js/pages/home');

/* SASS */
mix.sass('front-end/sass/core/app.scss', 'public/css/core')
    .sass('front-end/sass/pages/home.index.scss', 'public/css/pages');
