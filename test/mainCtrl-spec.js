describe('And the test begins', function () {
    var $rootScope,
        $scope,
        controller;

    beforeEach(function () {
        module('myApp');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('SampleController', {
                $scope: $scope
            });
        })
    });



     describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect(8).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(5);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

      describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(8);
           })
       });

    
    

    /*   describe('my init setup', function(){
           it('my imges should start with 8', function(){
               expect($scope.images).toEqual(7);
           })
           
       });
      
       describe("cannot have negative number of images", function(){
        it('Do nothing when I delete when I don have more image to delete', function(){
            
               $scope.images = 0;
               $scope.eliminateImage();
               
               expect($scope.images).toEqual(0);
               
           });
       });
       */





});
