const myPromise = (time) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time)
    }))
};

const test = async () => {
    const data = await myPromise(1000);
    console.log(data);
};
// ********not work*********
// test();
// for(let item of [1,2,3]){
//     test();
// }

// ********not work*********
// for (let i = 0; i < 3; i++) {
//     test();
// }

// ********work*********
const testForeach = async () => {
    for (let item of [1,2,3]){
        const data = await myPromise(1000);
        console.log(data);
    }
};

testForeach();