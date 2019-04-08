function myInterval(cb, time, ...args) {
    let self = this;
    let timer = null;
    (function loop() {
        timer = setTimeout(()=>{
            cb.call(self, ...args);
            loop();
        }, time);
    })();
    return timer;
}

myInterval(()=>console.log(1), 1000);