'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task("concatScripts", function(){
	gulp.src(['bower_components/jquery/dist/jquery.min.js', 'js/instafeed.min.js', 'js/jquery.animsition.js', 'js/main.js'])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function () {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

// Task for building blog when something changed:
// gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// Or if you don't use bundle:
gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);
