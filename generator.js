function* test(p) {
    console.log('1:',p)
    let a = yield 1;
    console.log(a*2)
}

let gen = test(22);
console.log(gen)
gen.next();