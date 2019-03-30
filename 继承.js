// 理解继承的实质，即使子类原型对象的__proto__指向父类原型对象

function A(arg) {
    this.a = arg;
}

A.prototype.func = function () {
    console.log(2);
};


// B 继承了A的私有和公有属性
function B() {
    A.apply(this, arguments);
}

B.prototype = Object.create(A.prototype, {
    constructor: {
        value: B,
        writable: true,
        enumerable: false,
        configurable: true
    }
});

console.log(new B());