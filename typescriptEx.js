console.log('HI');
var x = 10;
x++;
console.log('x', x);
var y;
y = 10;
console.log('10', y);
var MyClas = /** @class */ (function () {
    function MyClas(id, name) {
        this._id = id;
        this._name = name;
    }
    return MyClas;
}());
var c1 = new MyClas(1, "sr");
console.log('c1', JSON.stringify(c1));
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thu"] = 4] = "thu";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
console.log(days[1]);
var a = function () {
};
function returnA() {
    return 5;
}
var MyChdCls = /** @class */ (function () {
    function MyChdCls() {
    }
    MyChdCls.testera = function () {
        console.log("Static method");
    };
    MyChdCls.prototype.testA = function () {
        console.log("First Method");
    };
    MyChdCls.prototype.testB = function () {
        console.log("Second Method");
    };
    MyChdCls.prototype.testc = function () {
        console.log("Another interface method a");
    };
    MyChdCls.prototype.testd = function () {
        console.log("Another interface method b");
    };
    return MyChdCls;
}());
var objb = new MyChdCls();
MyChdCls.testera();
objb.testA();
objb.testB();
objb.testc();
objb.testd();
