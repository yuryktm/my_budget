require.config({

    paths: {
       // 'domReady': '../lib/requirejs-domready/domReady',
        'angular': '../lib/angular.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        }
    },

    // запустить приложение
    //deps: ['./bootstrap']
});



require(['./budgetModel', 'angular'],
   function(budgetModel, angular){

       var app = angular.module('app', []);
       app.controller('BudgetController', function($scope) {
           $scope.test= "John";

           $scope.rateSum = -11111;
           $scope.profitSum = 9999;
           $scope.month = "Ноябрь";



           //budgetModel.init();
           //budgetModel.addItemProfit("sdfg", 444);
           //budgetModel.print();





       });


       angular.module('app', []).filter('testFilter', function(){

           return function (item){
                return item;
           };
       });




    }
);
