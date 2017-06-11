var gulp = require('gulp');
		sass = require('gulp-sass');
		pug = require('gulp-pug');
		browserSync = require('browser-sync');

gulp.task('pug', function() {
  gulp.src(['pug/index.pug', 'pug/my_works.pug'])
    .pipe(pug({
      pretty: true
    }))
  .pipe(gulp.dest(''));
});

gulp.task('sass', function(){
	gulp.src('sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(''))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('pug/*.pug', ['pug']);
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false,
    // tunnel: true,
    // tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
  });
});

gulp.task('default', ['pug','sass','watch','browser-sync']);