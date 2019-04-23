// 闭包的使用: 要么包父亲要么包儿子
// 累加
let add = (function () {
    let count = 0;

    function inner() {
        console.log(++count)
    }

    inner.clear = function () {
        count = 0
    };
    return inner;
})();

// add();
// add();
// add();
// add.clear();
// add();

// 累乘
// multi(2)(3)(4)   输出24
let multi = (function () {
    let args = [];

    function inner(arg) {
        args = args.concat(arg);
        if (args.length === 3) {
            return args.reduce((total, cur) => {
                return total * cur
            }, 1);
        }
        return inner;
    }

    return inner;
})();

console.log(multi(2)(3)(4));

// 累乘2
// multi(2)(3)(4)()   输出24
let multi2 = (function () {
    let args = [];

    function inner(arg) {
        if (arg) {
            args = args.concat(arg);
            return inner;
        } else {
            return args.reduce((total, cur) => {
                return total * cur
            }, 1);
        }
    }

    return inner;
})();

console.log(multi2(2)(3)(4)());