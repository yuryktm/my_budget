requirejs.config({
    //baseUrl: 'lib',
    paths: {
       // app: '../js'
    }
});

require(['./budgetModel'],
   function(budgetModel, angular){

       var app = angular.module('app', []);
       app.controller('BudgetController', function($scope) {
           $scope.test= "John";
          // $scope.lastName= "Doe";
       });

        //budgetModel.init();
        //budgetModel.addItemProfit("sdfg", 444);
        //budgetModel.print();



    }
);
