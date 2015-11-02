define(function(){
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


