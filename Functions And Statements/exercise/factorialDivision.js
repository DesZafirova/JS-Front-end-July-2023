function solve(x, y) {
    let firstFactorial = factorial(x);
    let secondFactorial = factorial(y);
    console.log(`${(firstFactorial / secondFactorial).toFixed(2)}`)

    function factorial(number) {
        if (number < 0) return;
        if (number < 2) return 1;
        return number * factorial(number - 1)
    }
}

solve(5, 2);