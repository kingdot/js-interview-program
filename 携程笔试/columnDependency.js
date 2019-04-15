function main(input) {
    let free = [];
    let originObj = JSON.parse(input);

    while(free.length !== Object.keys(originObj).length){
        Object.keys(originObj).forEach(item => {
            if ((originObj[item].length===0 || originObj[item].every(item => free.indexOf(item) > -1)) && free.indexOf(item) < 0) {
                free.push(item);
            }
        });
    }

    return free;
}

console.log(main('{"A":["P","P"],"B":["D","C","F"],"C":["E"],"D":[],"E":["D"],"F":["E","C"]}'))