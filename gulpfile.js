// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')

gulp.task('sass', function() {
    gulp.src('./css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', function(){
            this.emit('end')
        })
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
});

gulp.task('dafault', ['sass'], function() {
    gulp.watch('./css/*.scss', ['sass']);
})