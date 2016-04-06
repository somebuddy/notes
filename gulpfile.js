var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();
var serveConfig = require('./configs/bs-config.js');

gulp.task('build:client:typescript', function() {
  var tsProject = ts.createProject('tsconfig.json');
  tsProject.src().pipe(ts(tsProject)).js.pipe(gulp.dest('build'));
});

gulp.task('build:client:html', function() {
  console.log('Preparing html');
  gulp.src('client/**/*.html')
    .pipe(gulp.dest('./build/client'));
});

gulp.task('build:client:sass', function() {
  gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('build:client', [
  'build:client:typescript',
  'build:client:html',
  'build:client:sass'
]);

gulp.task('build:server', []);

gulp.task('build', ['build:client', 'build:server']);

gulp.task('serve', ['build'], function() {
  console.log('Gulp serving...');
  browserSync.init(serveConfig);
});

gulp.task('default', ['serve']);
