var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var less = require('gulp-less-sourcemap');
var ghPages = require('gulp-gh-pages');

// Static Server
gulp.task('serve', function() {
    browserSync.init({
        server: "."
    });
});

// Watching scss/less/html files
gulp.task('watch', ['serve', 'sass', 'less'], function() {
    gulp.watch("assets/scss/*.scss", ['sass']);
    gulp.watch("assets/less/*.less", ['less']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile SASS into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("assets/scss/*.scss")
    .pipe(sass({
      sourceComments: 'map',
      sourceMap: 'scss'
    }))
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
});

// Compile LESS into CSS & auto-inject into browsers
gulp.task('less', function() {
  return gulp.src("assets/less/*.less")
    .pipe(less({
      sourceMap: {
        sourceMapRootpath: './assets/less' // Optional absolute or relative path to your LESS files
      }
    }))
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.stream());
});

// Deploy pahe to github pages
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


gulp.task('default', ['sass', 'serve']);
gulp.task('server', ['serve']);
gulp.task('dev', ['watch']);