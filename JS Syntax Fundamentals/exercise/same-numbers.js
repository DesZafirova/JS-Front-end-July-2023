function sameNumbers(number) {

    const digits = number.toString().split("").map(Number);
    const isConsistent = new Set(digits).size === 1;
    const sum = digits.reduce((total, number) => total + number, 0);
    // const digitsString = number.toString();
    // let isConsistent = true;
    // let sum = Number(digitsString[0]);
    //
    // for (let index = 1; index < digitsString.length; index++) {
    //     sum += Number(digitsString[index]);
    //     if (digitsString[index] !== digitsString[index - 1]) {
    //         isConsistent = false;
    //     }
    // }
    console.log(isConsistent);
    console.log(sum);
}

sameNumbers(1234);
