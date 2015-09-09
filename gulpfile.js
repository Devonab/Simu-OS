var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    compass = require('gulp-compass');

// ========================
//  compass task
// ========================

gulp.task('compass', function(){
    return gulp.src('assets/scss/*.scss')
        .pipe(plumber())
        .pipe(compass({
            http_path: '/',
            css: 'assets/css',
            sass: 'assets/scss',
            image: 'assets/img',
            javascripts: 'assets/js',
            font: 'assets/fonts'

    }))
    .pipe(gulp.dest('assets/css'))
});

// ========================
//  file watch
// ========================

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['compass']);
});
