// 注意：最后一位相加有进位的情况
function bigAdd(a, b) {
    var aArr = a.split('') || [];
    var bArr = b.split('') || [];

    var len = Math.max(aArr.length, bArr.length);

    var result = [];
    var plus = 0;
    for (var i = 0; i < len; i++) {
        // 注意这里的取数方式！
        var temp = parseInt(aArr[aArr.length - i - 1] || 0) + parseInt(bArr[bArr.length - i - 1] || 0);
        result[len-1-i] = temp % 10 + plus;
        plus = Math.floor(temp / 10);
    }
    if (plus === 1) result.unshift(1);

    return result.join('');
}

let a = bigAdd('9999', '988');
console.log(9999+988)
console.log(a)