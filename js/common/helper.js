define('helper',[], function() {

    var helper = {};
    helper.inherits = function(Chaild, Parent) {
        var obj = function () {
        };
        obj.prototype = Parent.prototype;
        Chaild.prototype = new obj();
        Chaild.prototype.constructor = Chaild;
    };

    return helper;
});
