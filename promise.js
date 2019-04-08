function myPromise(excutor) {
    let self = this;

    self.status = 'PENDING';
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCallBacks = [];
    self.onRejectedCallBacks = [];

    function resolve(value) {
        if (self.status === 'PENDING') {
            self.value = value;
            self.status = 'RESOLVED';
            self.onFulfilledCallBacks.forEach(f => f());
        }
    }

    function reject() {
        if (self.status === 'PENDING') {
            self.status = 'REJECTED';
            self.onRejectedCallBacks.forEach(f => f());
        }
    }

    try {
        excutor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

myPromise.prototype.then = function (onResolve, onReject) {
    let self = this;
    if (self.status === 'RESOLVED') {
        onResolve(self.value);
    }

    if (self.status === 'REJECTED') {
        onReject(self.reason);
    }

    if (self.status === 'PENDING') {
        // 为啥这里要用函数包裹一下？
        self.onFulfilledCallBacks.push(() => onResolve(self.value));
        self.onRejectedCallBacks.push(() => onReject(self.reason))
    }
};