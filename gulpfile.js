var gulp = require('gulp');
var ts = require('gulp-typescript');

var browserSync = require('browser-sync').create();
var serveConfig = require('./configs/bs-config.js');


gulp.task('serve', function() {
  console.log('Gulp serving...');
  browserSync.init(serveConfig);
});

gulp.task('build:client', function() {
    var tsProject = ts.createProject('tsconfig.json');
    tsProject.src().pipe(ts(tsProject)).js.pipe(gulp.dest('build'));
})

gulp.task('default', ['serve']);
