const carWash = {
    soap: (cleanPercentage) => cleanPercentage + 10,
    water: (cleanPercentage) => cleanPercentage + cleanPercentage * 0.2,
    "vacuum cleaner": (cleanPercentage) => cleanPercentage + cleanPercentage * 0.25,
    mud: (cleanPercentage) => cleanPercentage - cleanPercentage * 0.1

}
function solve(arr) {

    let cleanPercentage = arr.reduce(function (acc, curr) {
        return carWash[curr](acc);
    }, 0);
    // for (let i = 0; i < arr.length; i++) {
    //     const command = arr[i];
    //
    //     cleanPercentage = carWash[command](cleanPercentage);
    // switch (command) {
    //     case "soap" :
    //         cleanPercentage += 10;
    //         break
    //     case "water":
    //         cleanPercentage += cleanPercentage * 0.2;
    //         break
    //     case "vacuum cleaner":
    //         cleanPercentage += cleanPercentage * 0.25;
    //         break
    //     case "mud":
    //         cleanPercentage -= cleanPercentage * 0.1;
    // }


    return `The car is ${cleanPercentage.toFixed(2)}% clean.`;
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',
    'water']));
console.log(solve(["soap", "water", "mud", "mud", "water", "mud",
    "vacuum cleaner"]
))