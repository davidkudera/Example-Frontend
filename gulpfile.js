var gulp = require('gulp');
var less = require('gulp-less');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var sourceMaps = require('gulp-sourcemaps');

var source = require('vinyl-source-stream');

var exorcist = require('exorcist');

var browserify = require('browserify');
var debowerify = require('debowerify');
var tsify = require('tsify');

var uglifyJs = require('gulp-uglify');
var uglifyCss = require('gulp-minify-css');


var config = {
	bowerDir: __dirname + '/bower_components',
	applicationDir: __dirname + '/app',
	stylesDir: __dirname + '/styles',
	publicDir: __dirname + '/public'
};


// ====== APPLICATION


/**
 * Compile ts files to js and save result to public directory
 */
gulp.task('compile-js', function() {
	var bundler = browserify({
			basedir: config.applicationDir,
			debug: true
		})
		.add(config.applicationDir + '/index.ts')
		.plugin(tsify)
		.transform(debowerify);

	return bundler.bundle()
		.pipe(exorcist(config.publicDir + '/application.js.map'))
		.pipe(source('application.js'))
		.pipe(gulp.dest(config.publicDir));
});


/**
 * Minify result js file
 */
gulp.task('uglify-js', ['compile-js'], function() {
	return gulp.src(config.publicDir + '/application.js')
		.pipe(uglifyJs())
		.pipe(rename('application.min.js'))
		.pipe(gulp.dest(config.publicDir));
});


// ====== STYLES


/**
 * Compile less styles to css and save result to public directory
 */
gulp.task('compile-css', function() {
	return gulp.src(config.stylesDir + '/index.less')
		.pipe(sourceMaps.init())
		.pipe(less({paths: [config.stylesDir]}))
		.pipe(replace('../fonts/glyphicons', './fonts/bootstrap/glyphicons'))	// set right paths to bootstrap fonts
		.pipe(rename('style.css'))												// rename must be before source maps call
		.pipe(sourceMaps.write('.'))											// must be relative to public directory
		.pipe(gulp.dest(config.publicDir));
});


/**
 * Minify result css file
 */
gulp.task('uglify-css', ['compile-css'], function() {
	return gulp.src(config.publicDir + '/style.css')
		.pipe(uglifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest(config.publicDir));
});


// ====== FONTS


/**
 * Copy bootstrap fonts to public directory
 */
gulp.task('fonts-bootstrap', function() {
	return gulp.src(config.bowerDir + '/bootstrap/fonts/*')
		.pipe(gulp.dest(config.publicDir + '/fonts/bootstrap'));
});


/**
 * Copy all fonts to public directory
 */
gulp.task('fonts', ['fonts-bootstrap']);
