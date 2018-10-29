const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

// TOP LEVEL FUNCTIONS
// gulp.task - Define a task
// gulp.src - Point to the files to use 
// gulp.dest - Points to the folder to output
// gulp.watch - Watch files and folders for changes

//logs message
gulp.task('message', function(){
    return console.log("Gulp is running...");
});

//Copy all HTML files
gulp.task('copyHtml', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

//Copy Assets
gulp.task('copyAss', function(){
    gulp.src('src/assets/fonts/*')
    .pipe(gulp.dest('dist/assets/fonts'));
});

//optimize images

// gulp.task('imageMin', function(){
//     gulp.src('src/images/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/images'))
// });
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    );

//Minify JS
gulp.task('minify', function(){
    gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

//Compile Sass
gulp.task('sass', function(){
    gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('default', ['message', 'copyHtml','copyAss', 'imageMin', 'minify', 'sass']);
    
gulp.task('watch', function(){
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/assets/fonts/*', ['copyAss']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/*.js', ['minify']);
    gulp.watch('src/*.scss', ['sass']);
});