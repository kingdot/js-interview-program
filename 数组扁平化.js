// 方法一：数组的toString方法
let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatMe(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('params is invalid');
    }

    return [...new Set(arr.toString().split(',').map(str => parseInt(str)))].sort((a, b) => a - b);
}

// console.log(flatMe(arr));

// 方法二：reduce+递归

function flatMe2(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('params is invalid');
    }

    let flatArr = [];
    flatArr = arr.reduce((total, item) => Array.isArray(item) ? [...total, ...flatMe2(item)] : [...total, item], []);
    // 或者使用concat
    //flatArr = arr.reduce((total, item) => Array.isArray(item) ? total.concat(flatMe2(item)) : total.concat(item), []);

    return [...new Set(flatArr)].sort((a, b) => a - b);
}

// console.log(flatMe2(arr));


// 方法三：Array.prototype.flat()，可能不被支持
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// 使用 Infinity 作为深度，展开任意深度的嵌套数组
function flatMe3(arr) {
    return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
}

console.log(flatMe3(arr));
