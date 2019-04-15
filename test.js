function main(arr){
    if(!arr || arr.length===0) return 0;
    if(arr.length===1){
        if(arr[0]==='1') return 1;
        return 0;
    }
    let count = 0;
    let max = 0;
    // 两头不全为1
    if(arr[0] !== '1' || arr[arr.length-1] !== '1'){
        for(let i =0; i<arr.length; i++){
            while(arr[i]==='1' && i<arr.length-1){
                count++;
                i++;
            }
            max = Math.max(max, count);
            count = 0;
        }
        return max;
    }else{
        // 两头全为1
        let startNum = 0;
        let endNum = 0;
        let j = arr.length-1;
        while(arr[startNum]==='1' && startNum<arr.length-1){
            startNum++;
        }
        while(arr[j]==='1'&&j>0 ){
            endNum++;
            j--;
        }
        for(let i =0;i<arr.length-1;i++){
            while(arr[i]==='1'){
                count++;
                i++;
            }
            max = Math.max(max, count);
            count = 0;
        }
        return Math.max(max, startNum+endNum);
    }

}

console.log(main('110110100011111000001111111110011'.split('')));