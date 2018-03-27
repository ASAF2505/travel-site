var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browser_sync = require('browser-sync').create();


gulp.task('watch',function(){
 
  browser_sync.init({
     notify:false,
     server:{
      baseDir:'app'
     }
  });

	watch('./app/index.html',function(){
      browser_sync.reload();
	});

  watch('./app/assets/styles/**/*.css',function(){
      gulp.start('css_inject');
	});

});

gulp.task('css_inject',['styles'],function(){
   return gulp.src('./app/temp/styles/style.css').pipe( browser_sync.stream() );
});
