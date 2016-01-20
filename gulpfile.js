var gulp         = require('gulp');
var sass         = require('gulp-sass');
var minifyCss    = require('gulp-minify-css');
var watch        = require('gulp-watch');
var react        = require('gulp-react');
var flow         = require('gulp-flowtype');
var documentRoot = './';
var development  = 'development/';
var publicFolder = 'public/';
var hamlDirectory = documentRoot + development + 'haml/**/*.haml';
var scssDirectory = documentRoot + development + 'scss/**/*.scss'

// ####################
// ####### scss #######
// ####################
gulp.task('sass', function() {
  gulp.src(scssDirectory)
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest(documentRoot + publicFolder + 'css'));
});

// ####################
// ####### haml #######
// ####################
var haml = require('gulp-ruby-haml');
gulp.task('haml', function() {
  gulp.src(documentRoot + development + 'haml/**/*.haml')
    .pipe(haml({doubleQuote: true}))
    .pipe(gulp.dest(documentRoot + publicFolder));
});

// watch
gulp.task('watch', function() {
  watch(scssDirectory, function() {
    gulp.start('sass');
  });
  watch(hamlDirectory, function() {
    gulp.start('haml');
  });
});