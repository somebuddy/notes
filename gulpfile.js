var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var serveConfig = require('./configs/bs-config.json');

gulp.task('serve', function() {
  console.log('Gulp serving...');
  browserSync.init(serveConfig);
});

gulp.task('default', ['serve']);
