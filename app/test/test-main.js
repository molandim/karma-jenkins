var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/spec\.js$/).test(file);
});

require.config({
    paths: {
        'angular': '/base/bower_components/angular/angular',
        'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
        'app':'/base/app/script/app',
    },

    baseUrl: '/base/app/script',

    shim: {
        'angular': {'exports': 'angular'},
        'angularMocks': {deps: ['angular'], 'exports': 'angular.mock'},
        'app': {deps: ['angular', 'angularMocks']}
        

    },

    // Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});
/*

require(['app'], function(){
    //console.log(require);
    window.__karma__.start();
});

*/
