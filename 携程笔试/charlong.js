function main(input){
    if(!input) return 0;
    let map = {};
    let i = 0;

    return input.split('').reduce((big, item, index) => {
        i = map[item] ? map[item]+1 : i;
        map[item] = index;
        return Math.max(big, index-i+1);
    }, 0);
}

console.log(main('abcabcab'));