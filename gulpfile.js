const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const autoprefixer = require('autoprefixer');
const rimraf = require('gulp-rimraf');
const runSequence = require('run-sequence');

// 编译less为exss
gulp.task('less2wxss', function () {
  return gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
    .pipe(rename(function (path) {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('dist'));
});

// 编译js文件，虽然微信小程序自带编译，但是并不支持某些babel特性
gulp.task('babel', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

// copy 除js和less以外的所有文件
gulp.task('copy', function () {
  return gulp.src(['src/**/*', '!src/**/*.js', '!src/**/*.less'])
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(rimraf());
});
gulp.task('default', function (callback) {
  runSequence('clean',
    'build',
    callback);
});
gulp.task('build', ['babel', 'less2wxss', 'copy']);
gulp.task('dev', ['build'], function () {
  gulp.watch('src/**/*', ['babel', 'less2wxss', 'copy']);
});
