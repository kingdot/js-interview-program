// 适用两个数组，一个保存逆序[3,2,1],另一个保存原有数组，同时从前往后扫描这两个数组，
// 如果原数组和逆序数组相同，则输出该元素，指针都前进一步，若不同，原数组

/**
 * @return {number}
 */
let count = 0;
let N = undefined, k = undefined;
let arr = [];
while (line = readline()) {
    if (count === 0) {
        let firstLine = line.split(" ");
        N = parseInt(firstLine[0]);
        k = parseInt(firstLine[1]);
        count++;
    } else {
        arr = line.split(" ");
        f(arr, k);
    }
}

function f(arr, k) {
    // 递增排序
    let sortArr = arr.sort((a, b) => a - b);

    for (let i = 0; i < k; i++) {
        let flag = true;
        let val = undefined;
        for (let j = 0; j < sortArr.length; j++) {
            if (flag && sortArr[j] !== 0) {
                flag = false;
                val = sortArr[j];
                console.log(val);
                sortArr[j] = 0;
            } else if (flag && j === sortArr.length - 1) {
                console.log(0);
                return;
            } else {
                sortArr[j] -= val;
            }
        }
    }
}