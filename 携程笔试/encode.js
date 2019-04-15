function encode(input){
    if(!input) return {};
    let map = {};
    let paramsArr = input.split('&');
    paramsArr.forEach(item => {
        const [key, value] = item.split('=');
        map[key] = value;
    })

    return map;
}


console.log(encode(''));