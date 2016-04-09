var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();
var serveConfig = require('./configs/bs-config.js');

var excluded_files = [
  '!./node_modules/*',
  '!./typings/*',
  '!./.c9/*',
  '!./.git/*',
];

var templateFiles = ['./client/**/*.html'].concat(excluded_files);
var scriptFiles = ['./client/**/*.ts'].concat(excluded_files);
var styleFiles = ['./styles/**/*.scss', './styles/**/*.css'].concat(excluded_files);

// Scripts prepare
gulp.task('clean:build:scripts', function () {
  return del(['./build/**/*.js']);
});

gulp.task('build:typescript', ['clean:build:scripts'], function() {
  console.log('Compile typescript...');
  var tsProject = ts.createProject('tsconfig.json');
  tsProject.src()
    .pipe(ts(tsProject))
    .js
    .pipe(gulp.dest('build'));
});

gulp.task('build:scripts', ['clean:build:scripts', 'build:typescript']);

// Templates prepare
gulp.task('clean:build:templates', function () {
  return del(['./build/**/*.html']);
});

gulp.task('build:client:html', ['clean:build:templates'], function() {
  console.log('Copying templates...');
  gulp.src('client/**/*.html')
    .pipe(gulp.dest('./build/client'));
});

gulp.task('build:templates', ['clean:build:templates', 'build:client:html']);

// Styles
gulp.task('clean:build:styles', function () {
  return del(['./build/**/*.css']);
});

gulp.task('build:sass', ['clean:build:styles'], function() {
  console.log('Compiling sass...');
  gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('build:styles', ['clean:build:styles', 'build:sass']);

// Build all together
gulp.task('build', [
  'build:scripts',
  'build:templates',
  'build:styles'
]);

gulp.task('serve', ['build'], function() {
  browserSync.init(serveConfig);
  gulp.watch(scriptFiles, ['build:scripts']);
  gulp.watch(templateFiles, ['build:templates']);
  gulp.watch(styleFiles, ['build:styles']);
});

gulp.task('default', ['serve']);
