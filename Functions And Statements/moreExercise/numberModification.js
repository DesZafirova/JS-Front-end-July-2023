function solve(number) {
    number = number.toString();
    function calculateAverage(number) {
       return number
            .split("")
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0) / number.length;

    }

    let average = calculateAverage(number);
    while(average < 5){
        number += "9";
        average = calculateAverage(number)
    }


    return number;
}

console.log(solve(101));
console.log(solve(5835));