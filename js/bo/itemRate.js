define(['./item','../common/helper'], function(Item, inherits){

    var ItemRate = (function(_super){
        inherits(ItemRate, _super);

        function ItemRate(name, summ){
            _super.call(this, name, summ);
        }

        ItemRate.prototype.getSumm = function(){
            return this.summ *= -1;
        };

        return ItemRate;
    })(Item);

    return ItemRate;
});