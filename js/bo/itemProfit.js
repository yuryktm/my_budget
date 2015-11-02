define(['./item','../common/helper'], function(Item, inherits){

    var ItemProfit = (function(_super){
        inherits(ItemProfit, _super);

        function ItemProfit(name, summ){
            _super.call(this, name, summ);
        }

        ItemProfit.prototype.getSumm = function(){
            return this.summ;
        };

        return ItemProfit;
    })(Item);

    return ItemProfit;
    }
);
