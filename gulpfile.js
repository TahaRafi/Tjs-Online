var gulp = require('gulp');


//var jshint = require('gulp-jshint');
var sass =   require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-clean-css');

var SRC = './src/Assets/scss/**/*.scss';
var DEST = './src/Assets/css/';

gulp.task('styles', function() {
    gulp.src(SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(DEST));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(SRC,['styles']);
});