function solve(input) {
    //изв конете
    const horsesInput = input.shift();
    //съхр в масив
    const horses = horsesInput.split("|");
    let commandLine = input.shift();
    while (commandLine !== "Finish") {
        const commandArr = commandLine.split(" ");
        const command = commandArr[0];
        const firstHorse = commandArr[1];
        const secondHorse = commandArr[2];
        switch (command) {
            case "Retake":
                const firstHorsePosition = horses.indexOf(firstHorse);
                const secondHorsePosition = horses.indexOf(secondHorse)
               if(firstHorsePosition < secondHorsePosition){
                    horses[firstHorsePosition] = secondHorse;
                    horses[secondHorsePosition] = firstHorse;
                   console.log(`${firstHorse} retakes ${secondHorse}.`)
               }
                break;
            case "Trouble":
                const horsePosition = horses.indexOf(firstHorse);

                if(horsePosition > 0){
                    horses[horsePosition] = horses[horsePosition - 1];
                    horses[horsePosition-1] = firstHorse;

                    console.log(`Trouble for ${firstHorse} - drops one position.`)
                }
                break;
            case "Rage":

                const position = horses.indexOf(firstHorse);
                if(position === horses.length - 2){
                    horses[horses.length - 2] = horses[horses.length - 1];
                    horses[horses.length - 1] = firstHorse;
                }
                else if(position < horses.length - 1){
                    horses[position] = horses[position + 1];
                    horses[position + 1] = horses[position + 2];
                    horses[position + 2] = firstHorse;

                }
                console.log(`${firstHorse} rages 2 positions ahead.`)


                break;
            case "Miracle":
                const lastHorse = horses.shift();
                horses.push(lastHorse);
                console.log(`What a miracle - ${lastHorse} becomes first.`)
                break;
        }


        commandLine = input.shift();
    }
    console.log(horses.join("->"));
    console.log(`The winner is: ${horses.pop()}`)


}
solve(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])



solve([
    'Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'
]);