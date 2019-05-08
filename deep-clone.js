// JSON的静态方法（不能拷贝null，undefined）、messageChannel（解决循环引用）、手写递归

function isObj(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function deep_clone(obj) {
    // 新建一个变量，保存副本
    let temp = Array.isArray(obj) ? [] : {};

    if (obj)

        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                temp[key] = isObj(obj[key]) ? deep_clone(obj[key]) : obj[key]
            }
        }

    return temp;
}

// messageChannel 注意是异步的方法
const structuralClone = (obj) => {
    return new Promise(resolve => {
        const {port1, port2} = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    });
};


// 支持所有基本类型、对象和数组、函数
function deepClone(obj) {
    // 处理常规函数，针对ES6的对象方法简写不工作, 针对内置函数（setTimeout等）不工作，针对bind返回的函数不工作
    if (TypeUtil.isFunction(obj)) {
        // 注意：这里的return后面要有一个空格
        return new Function("return " + obj.toString())();
    }
    // 处理基本类型和null
    if (obj === null || typeof obj !== 'object') return obj;

    // 处理日期

    // 处理正则

    // 处理对象和数组
    let temp = TypeUtil.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => temp[key] = deepClone(obj[key]));

    return temp;
}


// 封装一个类型判断函数
(function ($) {
    var types = ["Array", "Object", "String", "Null", "Undefined", "Date", "RegExp", "Function", "Boolean", "Number"];

    var toString = Object.prototype.toString;
    types.forEach(type => {
        // 这里使用了闭包，用函数作用域保存了type
        $['is' + type] = (arg) => toString.call(arg).slice(8, -1) === type;
    })

    // 这样写是错误的
    // for (var i = 0; i < types.length; i++) {
    //     $['is' + types[i]] = (arg) => toString.call(arg).slice(8, -1) === types[i];
    // }
})(global.TypeUtil || (global.TypeUtil = {}));

let obj = {
    a: 'fff',
    b: {
        c: null,
        d: undefined,
        e: function(){},
        ee: ()=>{},

        // 以下三种函数都不能拷贝
        f: (function () {}).bind({a:1}),
        g: setTimeout,
        func(){}
    }
};
let res = deepClone(obj);
console.log(res.b.f);

res.b.f(() => console.log(66), 1000)

// 全输出5
// let arr = [];
// for (var i = 0; i < 5; i++) {
//     arr.push(() => {
//         console.log(i)
//     })
// }
//
// arr.forEach(f => f());
