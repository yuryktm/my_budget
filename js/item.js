var Item = (function(){
    function Item(name, summ){
        this.name = name;
        this.summ = summ;
    }

    Item.prototype.getName = function(){
        this.name;
    };

    return Item;
})();

function inherits(Chaild, Parent){
    var obj = function(){};
    obj.prototype = Parent.prototype;
    Chaild.prototype = new obj();
    Chaild.prototype.constructor = Chaild;
}

var ItemProfit = (function(_super){
    inherits(ItemProfit, _super);

    function ItemProfit(name, summ){
        _super.call(name, summ);
    }

    //ItemProfit.superClass_= ItemProfit.prototype;

    ItemProfit.prototype.getSumm = function(){
        return this.summ;
    };

    return ItemProfit;
})(Item);

var ItemRate = (function(_super){
    inherits(ItemProfit, _super);

    function ItemRate(name, summ){
        _super.call(name, summ);
    }
    //ItemProfit.superClass_= ItemRate.prototype;

    ItemRate.prototype.getSumm = function(){
        return this.summ *= -1;
    };

    return ItemRate;
})(Item);

var item = new ItemProfit("test", 200);
var q = item.getSumm();

var item2 = new ItemRate("test", 200);
var q2 = item2.getSumm();