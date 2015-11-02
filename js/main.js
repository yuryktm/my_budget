//requirejs.config({
//    baseUrl: 'lib',
//    paths: {
//        app: '../js'
//    }
//});

require(['./bo/itemProfit', './bo/itemRate'],
   function(ItemProfit,ItemRate){

        var array = [];
        //
        array.push(new ItemProfit("haltura", 3000));
        array.push(new ItemRate("proezd", 300));
        array.push(new ItemRate("bass", 400));
        array.push(new ItemRate("bass", 400));

        for(var i = 0; i < array.length; i++){
            console.log(array[i].getSumm());
        }

    }
);
