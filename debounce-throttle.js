// 防抖

// 返回一个可以持续调用的函数
function debounce(cb, time) {
    let timer = null;

    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(cb, time);
    }
}

// 测试
// let func = debounce(() => console.log(1), 2000);
// setInterval(func, 3000);


// 节流
// 简易版本
function throttle(cb, time) {
    // 一个flag即可
    let flag = true;
    let timer = null;
    return function () {
        if (!flag) return;
        let args = arguments;

        flag = false;
        timer = setTimeout(() => {
            cb.apply(null, args);
            flag = true;
        }, time);
    }
}

// 正常版本, 不用定时器
function throttless(cb, time) {
    let startTime = 0;

    return function () {
        let endTime = new Date().getTime();
        if (endTime - startTime < time) return;
        cb.apply(null, arguments);
        startTime = new Date().getTime();
    }
}


// 测试
let func = throttless((args) => console.log(args), 1000);
setInterval(func, 30, 5);
