// 思路1：（先/中/后）遍历两次 依次比较值是否相等

// 思路2：递归判断
function sameTree(tree1, tree2) {
    // 相等时的递归出口
    if (tree1 === null && tree2 === null) return true;
    // 不符合条件时的出口
    if (tree1 === null && tree2 !== null || tree1 !== null && tree2 === null) return false;

    if (tree1.value !== tree2.value) {
        return false;
    } else {
        return sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right)
    }
}