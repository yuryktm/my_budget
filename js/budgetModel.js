define(['./bo/itemProfit', './bo/itemRate'],function(ItemProfit, ItemRate){

       var array = [];
       var model = {};

        model.addItemProfit = function(name, summ){
            array.push(new ItemProfit(name, summ));
        };

        model.addItemProfit = function(name, summ){
            array.push(new ItemProfit(name, summ));
        };

        model.init = function(){
            array.push(new ItemProfit("haltura", 3000));
            array.push(new ItemRate("proezd", 300));
            array.push(new ItemRate("bass", 400));
            array.push(new ItemRate("bass", 400));
        };

        model.print = function(){
            for(var i = 0; i < array.length; i++){
                console.log(array[i].getName() + " " +array[i].getSumm());
            }
        }

        return model;
    }
);
