// 使用代理类来遵守单一职责原则

class User {
    constructor(name) {
        this.name = name;
        console.log('init')
    }
}

let ProxysingletonUser =  (() => {
    let instance = null;

    return (name) => {
        if (!instance) {
            instance = new User(name);
        }
        return instance;
    }
})();

let a = ProxysingletonUser('wangdian');
let b = ProxysingletonUser('test');

console.log(a, b, a===b); // true