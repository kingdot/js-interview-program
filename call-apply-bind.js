// call和apply除了接收参数不一致外，实现都一样
// 这些个函数应该都是挂在Function的原型上面的

Function.prototype.myApply = function () {
    let funcName = this.name;
    let args = Array.from(arguments);
    let that = args[0] || window;

    // 给新的对象添加函数
    Object.defineProperty(that, funcName, self);
    let result = that[funcName](...args.slice(1));
    delete that[funcName];
    return result;
};

// bind 可以借助call实现，返回一个新函数
Function.prototype.mybind = function () {
    let self = this;
    let args = Array.from(arguments);
    let that = args[0] || window;

    return function () {
        self.call(that, ...args.slice(1));
    }
};