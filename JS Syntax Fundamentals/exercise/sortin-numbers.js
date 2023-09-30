function sortingNumbers(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const resultArr = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if(i % 2 === 0){
            resultArr.push(sorted.shift());
        }else{
            resultArr.push(sorted.pop());
        }
    }
    console.log(resultArr);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])