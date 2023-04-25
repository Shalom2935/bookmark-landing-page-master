const gulp = require('gulp');
const copy = require('gulp-copy');

gulp.task('copy', function() {
    return gulp.src('src/**/*')
        .pipe(copy('docs', { prefix: 1 }));
});

gulp.task('default', gulp.series('copy'));