// 堆排序主要分为两大步：
//   1. 建堆： 从第一个非叶子节点开始，从右往左，从下往上调整堆，结果是大顶堆/小顶堆
//   2. 交换堆顶元素后，从上到下，从左到右调整堆

function heapSort(arr) {
    if (arr.length <= 1) return arr;

    // 1. 建堆
    for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
        adjustHeap(arr, i, arr.length);
    }
    console.log(arr);

    // 2. 每次交换大顶堆/小顶堆的堆顶元素后，从上到下调整堆
    // 这个for循环，每一次都会从堆顶出发，向下调整出一个大顶堆/小顶堆
    for (let i = 0; i < arr.length; i++) {
        // 交换元素(数组中有两个元素)
        [arr[0], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[0]];
        // 因为堆顶被换了，因此每次排序的对象都是从堆顶到倒数第i个元素构成的树。且执行完它之后又成为了一个有序堆。
        adjustHeap(arr, 0, arr.length - 2 - i);
    }

    return arr;
}

/**
 * 从 i 节点开始向下调整，交换后递归向下
 * @param arr
 * @param i
 * @param size
 */
function adjustHeap(arr, i, size) {
    let left = 2 * i + 1, right = 2 * i + 2;
    let larger = i;
    // 父节点和其子节点比较
    // 先跟左边比，标记大者
    if (left < size && arr[left] > arr[larger]) larger = left;
    // 然后让大者跟右边比，标记二者中的较大者，此后，larger指向3个节点中的最大者
    if (right < size && arr[right] > arr[larger]) larger = right;

    if (larger !== i) {
        // 交换
        [arr[larger], arr[i]] = [arr[i], arr[larger]];
        // 继续对被交换的那个子节点进行递归调整
        adjustHeap(arr, larger, size);
    }
}

console.log(heapSort([4, 3, 2, 5, 6, 1, 9, 0, 8]))