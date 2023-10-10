function solve(input) {
    let numberOfPieces = Number(input.splice(0, 1));
    let astronauts = new Map();

    function addObject(info) {
        let obj = {};
        let name = info[0];
        let oxygen = Number(info[1]);
        let energy = Number(info[2]);
        obj = {name, oxygen, energy};
        astronauts.set(name, obj);
    }

    for (let i = 0; i < numberOfPieces; i++) {
        let info = input.shift().split(" ");
        addObject(info);
    }
    while (input.length > 0) {
        let commandLine = input.shift().split(" - ");
        if (commandLine[0] === "Explore") {
            let info = commandLine.slice(1, commandLine.length);
            let name = info[0];
            let energyNeeded = Number(info[1]);
            let currentEnergy = astronauts.get(name).energy;
            if (energyNeeded <= currentEnergy) {
                astronauts.get(name).energy = currentEnergy - energyNeeded;
                console.log(`${name} has successfully explored a new area and now has ${astronauts.get(name).energy} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }

        } else if (commandLine[0] === "Refuel") {
            let info = commandLine.slice(1, commandLine.length);
            let name = info[0];
            let amount = Number(info[1]);
            let currentEnergy = astronauts.get(name).energy;

            astronauts.get(name).energy = currentEnergy + amount;

            if (astronauts.get(name).energy > 200) {
                astronauts.get(name).energy = 200;

            }
            console.log(`${name} refueled their energy by ${astronauts.get(name).energy - currentEnergy}!`)

        } else if (commandLine[0] === "Breathe") {
            let info = commandLine.slice(1, commandLine.length);
            let name = info[0];
            let amount = Number(info[1]);
            let currentOxygen = astronauts.get(name).oxygen;
            astronauts.get(name).oxygen = currentOxygen + amount;
            if (astronauts.get(name).oxygen > 100) {
                astronauts.get(name).oxygen = 100;

            }
            console.log(`${name} took a breath and recovered ${Number(astronauts.get(name).oxygen - currentOxygen)} oxygen!`)


        }


    }
    let output = Array.from(astronauts.values());
    output.forEach(obj => {
        console.log(`Astronaut: ${obj.name}, Oxygen: ${obj.oxygen}, Energy: ${obj.energy}`)
    })

}

solve(
    ['3',
        'John 50 120',
        'Kate 80 180',
        'Rob 70 150',
        'Explore - John - 50',
        'Refuel - Kate - 30',
        'Breathe - Rob - 20',
        'End']
)
solve(
    [    '4',
        'Alice 60 100',
        'Bob 40 80',
        'Charlie 70 150',
        'Dave 80 180',
        'Explore - Bob - 60',
        'Refuel - Alice - 30',
        'Breathe - Charlie - 50',
        'Refuel - Dave - 40',
        'Explore - Bob - 40',
        'Breathe - Charlie - 30',
        'Explore - Alice - 40',
        'End']

)
