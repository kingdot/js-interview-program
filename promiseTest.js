// const promiseThunk = (parmas) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject('error:' + parmas)
//             try {
//                 throw new Error('asfas')
//             }catch (e) {
//                 reject(e);
//             }
//         }, 1000)
//     })
// };
//
//
// promiseThunk('wangdian')
//     .then(res => res)
//     .then(res => {
//         console.log('then2');
//         return promiseThunk('wd')
//     })
//     // .then(res => console.log(res), rej=>console.log(rej))
//     .catch((e) => console.error("ddd"+e))
//     .then(res => console.log('11'+res))
//
//
//
// function fetch(cb){
//     // setTimeout(()=>{
//     //     throw Error('error');
//     //     cb('dddd'); // 永远不会执行
//     // });
//     // cb('aaa');
//     throw Error('error');
//
// }
//
// // fetch((a)=>console.log(a)); // 输出 aaa
//
// Promise.resolve(true).then(()=> {
//     throw Error('microtask 中的异常')
// }).catch(error => {
//     console.log('捕获异常', error) // 捕获异常 Error: microtask 中的异常
// })


// function thirdFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject('收敛一些')
//             throw Error('dd')
//         })
//     })
// }

// Promise.resolve(true).then(() => {
//      thirdFunction()
// }).catch(error => {
//     console.log('捕获异常', error) // 捕获异常 收敛一些
// })

// async function f() {
//     await thirdFunction();
// }
//
// console.log(1);


// let a = new Map();
//
// a.set(1, 2);
// a.set(null, 1)
//
// a.set({}, {});
// a.set(function () {
// }, 'func');
//
// for (let item of a) {
//     console.log(item)
// }
// console.log(a.size)
