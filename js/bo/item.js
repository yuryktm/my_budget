define('Item',[], function(){
        //
        //var Item = (function(){
        //    function Item(name, summ){
        //        this.name = name;
        //        this.summ = summ;
        //    }
        //
        //    Item.prototype.getName = function(){
        //        this.name;
        //    };
        //
        //    return Item;
        //})();

        function Item(name, summ){
            this.name = name;
            this.summ = summ;
        }

        Item.prototype.getName = function(){
            this.name;
        };

        return Item;
    }
);


