//requirejs.config({
//    baseUrl: 'lib',
//    paths: {
//        app: '../js'
//    }
//});

require(['./budgetModel'],
   function(budgetModel){


        budgetModel.init();
       budgetModel.addItemProfit("sdfg", 444);
        budgetModel.print();



    }
);
