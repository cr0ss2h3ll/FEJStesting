const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const KarmaServer = require('karma').Server;
const ava = require('gulp-ava');

gulp.task('avaTest',()=>{
  gulp.src('./tests/avaTestCase')
  .pipe(ava({verbose:true}));
})
gulp.task('test', () => {
  var karmaConfig = {
    configFile: __dirname + '/karma.conf.js'
  };

  var karmaInstance = new KarmaServer(karmaConfig, _onKarmaExit);

  var karmaWebServer = karmaInstance.get('webServer');

  karmaWebServer.on('listening', _getConnectionDetails);

  karmaInstance.on('file_list_modified', browserSync.reload);

  karmaInstance.start();

  function _getConnectionDetails() {
    var connectionDetails = karmaWebServer.address();
    var debugAddress = [
      'http://localhost:',
      connectionDetails.port,
      '/debug.html'
    ].join('');

    _startBrowserSync(debugAddress);
  }

  function _startBrowserSync(debugAddress) {
    browserSync.init({
      open: true,
      reloadOnRestart: true,
      proxy: debugAddress
    });
  }

  function _onKarmaExit(exitCode) {
    process.exit(exitCode);
  }
});

gulp.task('karma', ['test']);
gulp.task('ava',['avaTest']);