function solve(input) {

    const riders = [];
    const ridersNumber = input.shift();

    for (let index = 0; index < ridersNumber; index++) {
        const inputInfo = input.shift().split(`|`);
        const riderName = inputInfo[0];
        const fuelCapacity = Number(inputInfo[1]);
        const riderPosition = Number(inputInfo[2]);

        if(!riders.hasOwnProperty(riderName)){
            riders[riderName] = {fuelCapacity,riderPosition};
        }
    }

    //returns names
    const ridersNames = Array.from(Object.keys(riders));

    let commandLine = input.shift();
    while(commandLine !== "Finish"){
        const arr = commandLine.split(" - ");

        const rider = arr[1];
        const minFuel = Number(arr[2]);
        const changePosition = Number(arr[3]);
        switch (arr[0]){
            case "StopForFuel":
                if(riders[rider].fuelCapacity >= minFuel){
                    console.log(`${rider} does not need to stop for fuel!`)
                }
                else {
                    riders[rider].riderPosition = changePosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}.`)

                }
                break
            case "Overtaking":
                const secondRider = arr[2];
                const firstPosition = riders[rider].riderPosition;
                const secondPosition = riders[secondRider].riderPosition;


                if(firstPosition < secondPosition){
                   riders[rider].riderPosition = secondPosition;
                   riders[secondRider].riderPosition = firstPosition;
                    console.log(`${rider} overtook ${secondRider}!`)
                }

                break
            case "EngineFail":
                const currRider = arr[1];
                // const currRiderPosition = riders[currRider].riderPosition;
                const lapsLeft = Number(arr[2]);
                const indexOfCurrRider = Object.keys(riders).indexOf(currRider);

                ridersNames.splice(indexOfCurrRider,1);

                console.log(`${currRider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                break
        }

        commandLine = input.shift();
    }
    ridersNames.forEach(riderName => {
        console.log(`${riderName}`);
        console.log(`  Final position: ${riders[riderName].riderPosition}`);
    })
}

// solve
// (["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])

solve
(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

