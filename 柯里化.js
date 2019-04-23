// 实现 sum(1,2)(3,4)(5).value()
function sum() {
    var slice = Array.prototype.slice;
    var argArr = [];
    argArr = argArr.concat(slice.call(arguments));

    // 必须返回一个新的function  不然每次会清空数组
    function add (){
        argArr = argArr.concat(slice.call(arguments));
        return add;
    }

    add.value = function () {
        return argArr.reduce((total, cur)=>{
            return total += cur;
        }, 0)
    };

    return add;
}

// console.log(sum(1,2)(3,4)(5).value());



// 更优雅的方案，剥离外层函数的影响

let sum2 = (function () {
    var slice = Array.prototype.slice;
    var argArr = [];

    // 必须返回一个新的function  不然每次会清空数组
    function add (){
        argArr = argArr.concat(slice.call(arguments));
        return add;
    }

    add.value = function () {
        return argArr.reduce((total, cur)=>{
            return total += cur;
        }, 0)
    };

    return add;
})();

console.log(sum2(1,2)(3,4)(5).value());
