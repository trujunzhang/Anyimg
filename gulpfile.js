var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
notify = require("gulp-notify"),
bower = require('gulp-bower');

var config = {
    sassPath: './sass',
    bowerDir: './components'
}

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./parse/public/fonts'));
});

gulp.task('bootstrap.css', function() {
    return gulp.src(config.bowerDir + '/bootstrap/dist/css/bootstrap.*')
        .pipe(gulp.dest('./parse/public/stylesheets'));
});

gulp.task('bootstrap.js', function() {
    return gulp.src(config.bowerDir + '/bootstrap/dist/js/bootstrap.**.*')
        .pipe(gulp.dest('./parse/public/javascripts/bootstrap'));
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            style: 'compressed',
            loadPath: [
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss'
            ]
        })
            .on("error", notify.onError(function (error) {
                return "Error: " + error.message;
            })))
        .pipe(gulp.dest('./parse/public/stylesheets'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('default', ['bower', 'icons', 'bootstrap.css','bootstrap.js']);