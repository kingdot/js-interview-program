// 思想：创建一个对象，先链接原型，再执行构造函数
function createObj() {
    let args = Array.prototype.slice.call(arguments);
    let ConsFunc = args[0];

    // 尽量不适用Object.setPrototypeOf方法，因为它涉及所有用过该属性的代码，以及可能访问该属性的对象，太耗费性能。
    // 推荐使用Object.create方法，根据给定原型，创建一个新对象
    let obj = Object.create(ConsFunc.prototype);

    // 构造函数有可能返回的不是this
    let result = ConsFunc.apply(obj, args.slice(1));

    return typeof result === 'object' && result || obj;
}

function A() {
    return {a: 1};
}

function B(val){
    this.b = val;
}

let aaa = createObj(A);
console.log(aaa);

let bbb = createObj(B, 1);
console.log(bbb);