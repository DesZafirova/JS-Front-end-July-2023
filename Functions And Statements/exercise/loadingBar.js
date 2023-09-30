function solve(percentage) {
    const percentageNumber = percentage / 10;
    const filledBar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);
    // let filledBar = "";
    // for (let index = 1; index < 100; index += 10) {
    //     if (index < percentage) {
    //         filledBar += "%";
    //     } else {
    //         filledBar += ".";
    //     }
    // }
    if (percentage === 100) {
        console.log("100% Complete");

    } else {
        console.log(`${percentage}% [${filledBar}]`)
        console.log("Still loading...");
    }
}

solve(100);