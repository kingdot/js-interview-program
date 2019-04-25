// // 主要使用了字符串的replace方法
// // 贪婪/非贪婪  参考：https://blog.csdn.net/lxcnn/article/details/4756030
// function render(tpl, data) {
//     // .表示匹配任意字符
//     // 当replace的第二个参数是函数时，
//     // 变量依次代表：匹配的字符 捕获的分组1 捕获的分组2... 匹配字符的起始位置 整个输入
//     // 注意贪婪匹配和非贪婪匹配：贪婪量词后面 + 一个？ = 非贪婪
//     return tpl.replace(/\{\{(.*?)\}\}/g, (match, target) => data[String.prototype.trim.call(target)])
// }
//
//
// var obj = {name: "二月", age: "15"};
// var str = "{{name   }}很厉害，才{{age}}岁";
// console.log(render(str, obj))
//
//
// function test() {
//     // "use strict";
//     aa = 1;
//     console.log(aa)
//     // var aa;
// }
//
// test();



function fibo(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibo(n - 1) + fibo(n - 2);
    }

}
console.log(fibo(0))