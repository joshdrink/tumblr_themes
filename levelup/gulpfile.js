var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rucksack = require('gulp-rucksack'),
    nano = require('gulp-cssnano');

// PostCSS Plugins
var includes = require('postcss-import'),
    mixins = require('postcss-mixins'),
    forLoops = require('postcss-for'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer-core'),
    simpleVars = require('postcss-simple-vars'),
    colorFunction = require('postcss-color-function');

gulp.task('compile', function() {
    var processors = [
        includes,
        mixins,
        forLoops,
        nested,
        autoprefixer({browsers: ['last 3 version']}),
        simpleVars,
        colorFunction
    ];
    return gulp.src('./post/*.css')
        .pipe(postcss(processors))
        .pipe(rucksack())
        .pipe(gulp.dest('./css'));
});

gulp.task('nano', ['compile'], function () {
    return gulp.src(['./css/*.css', '!./css/styleguide.css'])
        .pipe(nano())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('post/*.css', ['compile', 'nano']);
    gulp.watch('post/*/*.css', ['compile', 'nano']);
});

gulp.task('default', ['watch']);
