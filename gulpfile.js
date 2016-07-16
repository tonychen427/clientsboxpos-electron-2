const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function() {  
  return del(['dist', 'dist-electron']);
});

gulp.task('masterclean', ['clean'],function() {  
  return del(['node_modules','src/node_modules','src/bower_components']);
});
