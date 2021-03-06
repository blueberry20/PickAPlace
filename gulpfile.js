// include gulp
var gulp = require('gulp'); 
 
// include plug-ins
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

 
// minify new or changed HTML pages
gulp.task('minify-html', function() {
 	var opts = {empty:true, quotes:true};
 	var htmlPath = {htmlSrc:'*.html', htmlDest:'./appbuild'};
 
	return gulp.src(htmlPath.htmlSrc)
    .pipe(changed(htmlPath.htmlDest))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(htmlPath.htmlDest));
});


// CSS concat, auto prefix, minify, then rename output file
gulp.task('minify-css', function() {
	var cssPath = {cssSrc:['./css/*.css', '!*.min.css', '!/**/*.min.css'], cssDest:'./contentbuild/css/'};
 
  	return gulp.src(cssPath.cssSrc)
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssPath.cssDest));
});


 
// JS concat, strip debugging code and minify
gulp.task('bundle-scripts', function() {
var jsPath = {jsSrc:['./js/app.js','./js/**/*.js'], jsDest:'./appbuild'};
  gulp.src(jsPath.jsSrc)
    .pipe(concat('ngscripts.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(jsPath.jsDest));
});



// default gulp task
gulp.task('default', ['minify-html', 'bundle-scripts', 'minify-css'], function() {
  // watch for HTML changes
  gulp.watch('*.html', ['minify-html']);
  // watch for JS changes
  gulp.watch('./js/**/*.js', ['bundle-scripts']);
  // watch for CSS changes
  gulp.watch('./css/*.css', ['minify-css']);
});