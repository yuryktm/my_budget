define(function() {

    var inherits = function(Chaild, Parent) {
        var obj = function () {};
        obj.prototype = Parent.prototype;
        Chaild.prototype = new obj();
        Chaild.prototype.constructor = Chaild;
    };

    return inherits;
});
