var gulp = require('gulp'),
    webpack = require('webpack');


gulp.task('scripts',['modernizr'],function(callback){
	webpack( require('../../webpack.config.js'),function(error,statistics){
		if( error ){
			console.log( error.toString() );
		}
		console.log( statistics.toString() );
		callback();
	} );
});