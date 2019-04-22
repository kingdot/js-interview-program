// https://www.cnblogs.com/hapjin/p/5559688.html

// 扫描完整个母树

function isSubTree(root1, root2) {
    let result = false;

    //只有root1 和 root2 都不为空时,才去判断.其他情况root2都不是root1的子树
    if(root1 != null && root2 != null){
        if(root1.value === root2.value){
            // 比较两颗树是否相同 即：上题流程
            result = hasSameNode(root1, root2);
        }
        if(!result)
            result = isSubTree(root1.left, root2);//递归遍历左子树
        if(!result)
            result = isSubTree(root1.right, root2);//递归遍历右子树
    }
    return result;
}