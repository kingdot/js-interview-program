// 主要目的：创建一个新对象，使其__proto__指向参数对象，其实功能上跟Object.setProtoTypeOf(obj, proto)相同，只是前者返回一个新对象
// 效率更高


function myCreate(proto, properties) {
    let F = function () {
    };
    F.prototype = proto;
    let obj = new F();

    Object.keys(properties).forEach(key => {
        Object.defineProperty(obj, key, {
            ...properties[key],
            enumerable: true, // 默认不可以被for-in
            configurable: false, // 表示是否可以被删除(默认true)
            writable: false // 是否可被修改
            // get (){}
            // set (){}
        })

    });

    return obj;
}
