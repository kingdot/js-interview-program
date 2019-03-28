// 理解继承的实质，即使子类原型对象的__proto__指向父类原型对象

function myExtends() {
    let args = Array.from(arguments);

    let Cons = args[0];
    let prototype = Object.create(Cons.prototype);

    let F = function () {
    };
    F.prototype = prototype;
    F.prototype.constructor = F;
    return F;
}

// 测试
function A(arg) {
    this.a = arg;
}

A.prototype.func = function () {
    console.log(2);
};

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


let B = myExtends(A, 1);
console.log(new B());