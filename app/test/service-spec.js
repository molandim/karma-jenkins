define(['angular', 'angularMocks', 'app', 'baseService'],
    function (angular, mocks, EmailService) {

        describe('Services Test', function () {

            var services;


            beforeEach(function () {
               
               angular.mock.module('myApp');   
  

                mocks.inject(function ($injector) {
                 services = $injector.get('EmailService');
                })
            });

      

             it('services getEmail should return 3', function () {

                 expect(services.getEmail()).toEqual(3);

             });
            
             
        })


    }
);
