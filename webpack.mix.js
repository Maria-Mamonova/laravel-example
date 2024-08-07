const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/my.scss', 'public/css')
    .copyDirectory('resources/picture', 'public/picture')
    .copyDirectory('resources/icon', 'public/icon');
