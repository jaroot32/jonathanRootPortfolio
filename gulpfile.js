'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task("concatScripts", function(){
	gulp.src(['js/jquery.sticky.js', 'js/main.js'])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function () {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

