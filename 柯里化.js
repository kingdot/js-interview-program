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

console.log(sum(1,2)(3,4)(5).value());