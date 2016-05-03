var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	ts = require('gulp-typescript'),
	cleanCSS = require('gulp-clean-css'),
	livereload = require('gulp-livereload');

gulp.task('styl', function () {
  return gulp.src('./styl/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/'));
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('ts', function(){
	return gulp.src('./ts/*.ts')
		.pipe(ts({
			noImplicitiAny:true,
			out:'script.js'
		}))
		.pipe(gulp.dest('./js/'))
});

gulp.task('html', function(){
	return gulp.src([
		'./index.html'
	])
	.pipe(livereload());
});

gulp.task('default', function(){
	livereload.listen();
	gulp.watch('styl/**/*.styl', ['styl']);
	gulp.watch('ts/**/*.ts', ['ts']);
	gulp.watch('./index.html', ['html']);
});

