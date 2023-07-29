const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilar SASS
gulp.task('sass', function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Comprimir imagens
gulp.task('imagemin', function () {
  return gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Comprimir JavaScript
gulp.task('uglify', function () {
  return gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executará todas as tarefas
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));