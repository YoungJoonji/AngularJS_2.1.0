// Karma configuration
// Generated on Fri Jul 01 2016 14:19:17 GMT+0900 (대한민국 표준시)

module.exports = function(config) {
  const webpackTestConfig = require('./webpack.test.js');

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: './config/main.test.js', watched: false}
    ],


    // list of files to exclude
    exclude: [ ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './config/main.test.js': ['webpack', 'sourcemap']
    },


    // init webpack test config
    webpack: webpackTestConfig,


    // set webpack server
    webpackServer: {noInfo: true},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
}
