var app = angular.module('myApp', [])
.controller('SampleController', function($scope){
    
    $scope.images = 8;

    
    $scope.eliminateImage = function(){
        if($scope.images){
            $scope.images--;
        }
    }
})
        