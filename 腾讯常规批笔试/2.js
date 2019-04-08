function main(lines) {
    let result = [];

    for (let i = 0; i < lines.length; i++) {
        let counts = 0;
        let j = 0;
        while (lines[i].length) {
            let arr = lines[i];

            if (arr[j + 1] === arr[j] && j + 1 < arr.length) {
                arr.splice(j, 2);
                counts++;
                j = 0;
            } else if (j + 1 < arr.length) {
                j++;
            } else {
                break;
            }
        }

        if (counts%2===0) {
            console.log(counts)
            result.push('Oh,no.');
        }else {
            console.log(counts)
            result.push('Yes,you can win!');
        }
    }
    return result;
}

console.log(main([[1,2,3,3,2],[2,3,3,2,4,5,5,4,6,6]]).join('\n'));

/**
 * 2
 12332
 112233
 *
 Oh,no.
 Yes,you can win!
 **/