// Karma configuration
// Generated on Fri Jul 31 2015 11:58:37 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['requirejs', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/test/test-main.js',
      {pattern: 'bower_components/angular/angular.js', included: false},
      {pattern: 'bower_components/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'bower_components/moment/moment.js', included: false},
      {pattern: 'app/script/*.js', included: false},
      {pattern: 'app/test/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
        'app/script/main.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
     reporters: ['progress', 'junit'],
      
        junitReporter: {
            browserName: 'chrome',
            outputDir: 'results', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'output.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '' // suite will become the package name attribute in xml testsuite element
        },



    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    // browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}
