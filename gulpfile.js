// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
});

gulp.task('watch-sass', ['sass'], function() {
    gulp.watch('./css/*.scss', ['sass']);
})