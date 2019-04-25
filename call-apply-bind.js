// call和apply除了接收参数不一致外，实现都一样
// 这些个函数应该都是挂在Function的原型上面的


// 注意：call和apply都是立即执行的   => 借用对象上的方法（即：方法与this有耦合的情况）
Function.prototype.myApply = function () {
    let funcName = this.name;
    let args = Array.from(arguments);
    let that = args[0] || window;

    // 给新的对象添加函数
    Object.defineProperty(that, funcName, this);
    // 直接执行和使用eval的区别？
    // 在没有展开运算符之前，如何给一个函数传入不固定参数呢？
    // 通过eval函数，用字符串的方式拼接出一个函数执行的字符串
    // 由于参数的问题（没有办法动态展开成一个一个的实参
    //
    //
    //
    // ），
    // 必须使用eval拼接参数
    let result = that[funcName](...args.slice(1));
    delete that[funcName];
    return result;
};

// bind 可以借助call实现，返回一个新函数
Function.prototype.mybind = function () {
    let self = this;
    let args = Array.from(arguments); // 也可以使用展开运算符 const [thisArg, ...args] = [...arguments];
    let that = args[0] || window;

    return function () {
        self.call(that, ...args.slice(1));
    }
};

// =============================================================
//        call的浏览器原生实现
// =============================================================

Function.prototype.originCall = function () {
    var target = arguments[0] || window;
    // 把函数挂在target上面
    target.fn = this;  // 也可以使用 Object.defineProperty(target, 'fn', {value: this, enumerable: false, configurable: true})
    var args = [];

    // for循环转换arguments对象为数组
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }

    // 形式为；target.fn(arguments[1], arguments[2], ...), 这样做的目的是为了：
    // 因为eval执行的内容必须是string，如果传入的参数是对象或其他复杂类型时，用eval不便描述，因此这里使用arguments传递引用更合适。
    var result = eval("target.fn(" + args.join(',') + ")");
    delete target.fn;
    return result;
};

// =============================================================
//        apply的浏览器原生实现
// =============================================================

Function.prototype.originApply = function () {
    var target = arguments[0] || window;
    // 把函数挂在target上面
    target.fn = this;

    var result = undefined;
    if (!arguments[1] || arguments[1] === []) {
        result = target.fn();
    } else {
        var args = [];
        for (var i = 0; i < arguments[1].length; i++) {
            args.push('arguments[1][' + i + ']');
        }

        result = eval("target.fn(" + args.join(',') + ")");
    }

    delete target.fn;
    return result;
};

// =============================================================
//        bind的浏览器原生实现

//        需要考虑到返回的函数，有可能是正常调用，也有可能是new调用，因此要分开做处理
// =============================================================

Function.prototype.mybind = function () {
    var self = this;
    var target = arguments[0] || window;
    var args = Array.prototype.slice.call(arguments, 1);

    var Temp = function () {
    };

    // 返回一个新函数，并且新函数的this为第一个参数（考虑使用apply实现）
    var newFunc = function () {
        var _args = Array.prototype.slice.call(arguments);
        // 处理new调用时的this指向
        self.apply(this instanceof Temp ? this : target, args.concat(_args))
    };

    // 返回的函数继承自使用bind的函数
    Temp.prototype = self.prototype;
    newFunc.prototype = new Temp();

    return newFunc;
};


//================================================

// 返回函数的new测试
let testB = function () {
    console.log(this, arguments);
    this.b = 1;
};

let testb = testB.bind({'key':1}, 2);

testb(); // { key: 1 } [Arguments] { '0': 2 }

new testb(); // testB {} [Arguments] { '0': 2 }

//================================================

// 返回函数的继承测试
let child = new testb();
console.log(child.b); // 1