var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(); 

gulp.task('sass', function() {
    gulp.src('src/assets/scss/*.scss')
        .pipe(plugins.sass())
        .pipe(gulp.dest('src/assets/css'));
});

gulp.task('html', function() {
    var assets = plugins.useref.assets();

    return gulp.src('src/*.html')
        .pipe(assets)
        .pipe(plugins.if('*.css', plugins.minifyCss()))
        .pipe(assets.restore())
        .pipe(plugins.useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', function() {
    gulp.src('src/assets/fonts/*')
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('img', function() {
    gulp.src('src/assets/img/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['sass','html', 'fonts', 'img'], function() {

});

gulp.task('watch', function() {
	gulp.watch(['src/assets/scss/*.scss', 'src/assets/scss/includes/*.scss'], ['sass']);
	gulp.watch(['src/*.html', 'src/assets/css/*.css', 'src/assets/js/*.js'], ['html']);
    gulp.watch(['src/assets/fonts/*'], ['fonts']);
    gulp.watch(['src/assets/img/*'], ['img']);
});