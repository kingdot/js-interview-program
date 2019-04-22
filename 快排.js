// 简易版本
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let left = [];
    let right = [];
    let mid = Math.floor(arr.length / 2);
    let pivot = arr.splice(mid, 1)[0];
    for (let item of arr) {
        if (item > pivot) {
            right.push(item)
        } else {
            left.push(item)
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// 正常版本, 原地排序，改变自身
function qSort(arr, left, right) {
    if (arr.length <= 1) return arr;

    left = typeof left === 'number' ? left : 0;
    right = typeof right === 'number' ? right : arr.length - 1;
    let pivot;
    if (left < right) {
        pivot = partition(arr, left, right);
    }
    qSort(arr, left, pivot - 1);
    qSort(arr, pivot + 1, right);
}

function partition(arr, left, right) {
    let pivot = arr[left],
        i = left,
        j = right;
    while (i < j) {
        while (arr[i] <= pivot && i<j) i++;
        while (arr[j] > pivot && i<j) j--;
        // 交换元素
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // pivot归位
    [arr[left], arr[i]] = [arr[i], arr[left]];
    return i;
}