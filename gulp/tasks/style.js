
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    css_import = require('postcss-import'),
    css_vars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    autoprefixer = require('autoprefixer'),
    mixins = require('postcss-mixins');

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/style.css')
      .pipe( postcss( [css_import,mixins,css_vars,nested,autoprefixer] ) )
      .on('error',function(error_info){
      	 console.log( error_info.toString() );
      	 this.emit('end');
      })
	  .pipe( gulp.dest('./app/temp/styles') );
});