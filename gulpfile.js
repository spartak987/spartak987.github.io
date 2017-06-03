var gulp = require('gulp');
		sass = require('gulp-sass');
		pug = require('gulp-pug');
		browserSync = require('browser-sync');

gulp.task('sass', function(){
	gulp.src('layout/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('layout'));
});

gulp.task('pug', function() {
  gulp.src(['layout/pug/index.pug', 'layout/pug/my_works.pug'])
  	.pipe(pug({
  		pretty: true
  	}))
	.pipe(gulp.dest('layout'));
});

gulp.task('watch', function(){
	gulp.watch('layout/pug/*.pug', ['pug']);
	gulp.watch('layout/sass/*.sass', ['sass']);
});

gulp.task('default', ['pug', 'sass', 'watch']);

gulp.task('browser-sync', function () {
  var files = [
    'layout/*.html',
    'layout/*.css',
    'layout/js/*.js'
  ];
  
  browserSync.init(files, {
    server: {
      baseDir: './app'
    }
  });
});