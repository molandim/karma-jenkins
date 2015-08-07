// Karma configuration
// Generated on Wed Aug 05 2015 16:51:47 GMT+0100 (GMT Daylight Time)

//node "C:\Users\Foo Too\AppData\Roaming\npm\node_modules\karma\bin\karma" start

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',



        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/*.js',
      'test/*.js'
    ],


        // list of files to exclude
        exclude: [
    ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit'],


        junitReporter: {
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
       //browsers: ['Chrome'],
       browsers: ['PhantomJS'],

        singleRun: true



      
        
    })
}
