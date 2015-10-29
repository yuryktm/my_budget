define('itemProfit',['./bo/item','./common/helper'], function(Item, helper){

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


    //helper.inherits(ItemProfit, Item);
    //
    //function ItemProfit(name, summ){
    //    _super.call(this, name, summ);
    //}
    //
    //ItemProfit.prototype.getSumm = function(){
    //    return this.summ;
    //};
    //
    //return ItemProfit;
    }
);
