// 可参考：https://juejin.im/post/5c0b7f03e51d452eec725729

Array.prototype.myMap = function () {
    let self = this;

    // map接收两个参数，第一个是一个函数，第二个是可选的this
    const [cb, thisArg] = Array.prototype.slice.call(arguments);
    
    // 判断参数是否合法
    if (typeof cb !== 'function') {
        throw new Error('params is invalid');
    }
    let result = [];

    // 原生实现
    // for (let i =0;i<self.length;i++){
    //     // 注意，map的回调函数接收三个参数
    //     result.push(cb.call(thisArg, self[i], i, self));
    // }

    // reduce实现
    result = self.reduce((total, item, index, arr) =>{
        return total.concat(cb.call(thisArg, item, index, arr));
    }, []);

    return result;
};

let arr = [1,2,3].myMap(item => item*2);
console.log(arr);



//[1,3,4].map(function() {console.log(this)})