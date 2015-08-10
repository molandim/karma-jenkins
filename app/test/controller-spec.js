
define(['angular', 'angularMocks', 'app'],
    function (angular, mocks, baseCtrl) {

        describe('MainController', function () {

            var $rootScope,
                $scope,
                $controller,
                createSampleController,
                baseCtrl


            beforeEach(function () {
               
                angular.mock.module('myApp');   

                test = 'this is me';
                

                mocks.inject(function ($injector) {
                    
                    $rootScope = $injector.get('$rootScope');
                    $scope = $rootScope.$new();
                    $controller = $injector.get('$controller');

                    
                    baseCtrl = $controller('baseCtrl', {'$scope':  $scope})
                    
                    
                })
            });

      

             it('should do nothing when images == 0', function () {
             
                 expect($scope.images).toEqual(10);

             });
            
             
        })


    }
);

