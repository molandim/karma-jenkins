

define([
    'angular',
    'angularMocks',
    'require',
    'baseControler',
    'baseService'
    
    
], function (angular, mocks, require) {

  angular.module('myApp', []).controller('baseCtrl', require('baseControler')).factory('EmailService', require('baseService'));
 /* angular.module('myApp', []).controller('baseCtrl', function($scope){
        $scope.name = 'marcelo';
   });*/

});

