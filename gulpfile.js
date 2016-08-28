var gulp = require('gulp');
var nodemon = require('nodemon');

gulp.task('default', function() {
  nodemon({
    script: 'server.js',
    ext: 'js css html',
    env: {
      PORT: 7777
    },
    ignore: ['./node_modules/**']
  })
  .on('restart', function() {
    console.log('[restarting]');
  });
});
