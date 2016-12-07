'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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

