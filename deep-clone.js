// JSON的静态方法（不能拷贝null，undefined）、messageChannel（解决循环引用）、手写递归

function isObj(obj) {
    return (typeof obj === 'object' || typeof obj === 'function') && obj !== null
}

function deep_clone(obj) {
    let temp = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        temp[key] = isObj(obj[key]) ? deep_clone(obj[key]) : obj[key]
    }

    return temp;
}

// messageChannel 注意是异步的方法
const structuralClone = (obj) => {
    return new Promise(resolve => {
        const { port1, port2 } = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    });
};
