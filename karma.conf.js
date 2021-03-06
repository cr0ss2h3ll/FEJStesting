'use strict';
module.exports = function (config) {

  var defaults = {
    basePath: './',
    frameworks: ['jasmine','browserify'],
    files: [
      'dist/*.js' , 'tests/*.js'
    ],
    preprocessors: {
      '*.js': [ 'browserify' ],
      'dist/*.js': ['browserify'],
      'tests/*.js': ['browserify']
    },

    browserify: {
      debug: true,
        transform: ['babelify']
    },
    exclude: [],
    reporters: ['mocha'],
    client: {
      useIframe: true
    },
    reportSlowerThan: 500,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,

    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-babel-preprocessor'
    ],
    browsers: ['Chrome'],
    singleRun: false,
    autoWatch: true

  };



  config.set(defaults);
};
