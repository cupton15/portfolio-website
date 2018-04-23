// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename')

gulp.task('sass', function() {
    gulp.src('./css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', function(err){
            console.log(err)
            this.emit('end')
        })
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./css/*.scss', ['sass']);
})