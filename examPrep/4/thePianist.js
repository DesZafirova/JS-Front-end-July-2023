function pianist(input) {
    let numberOfPieces = Number(input.splice(0, 1));
    let pieces = new Map();

    function addObject(info) {
        let obj = {};
        let name = info[0];
        let composer = info[1];
        let key = info[2];
        obj = {name, composer, key};
        pieces.set(name, obj);
    }

    for (let i = 0; i < numberOfPieces; i++) {
        let info = input.shift().split("|");
        addObject(info);
    }
    while (input.length > 0) {
        let commandLine = input.shift().split("|");
        if (commandLine[0] === "Add") {
            let info = commandLine.slice(1, commandLine.length);
            let name = info[0];
            if (pieces.has(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                addObject(info);
                console.log(`${name} by ${info[1]} in ${info[2]} added to the collection!`);
            }
        } else if (commandLine[0] === "Remove") {
            let removePiece = commandLine[1];
            if (pieces.has(removePiece)) {
                pieces.delete(removePiece);
                console.log(`Successfully removed ${removePiece}!`);
            } else {
                console.log(`Invalid operation! ${removePiece} does not exist in the collection.`)
            }
        } else if (commandLine[0] === "ChangeKey") {
            let changePiece = commandLine[1];
            let newKey = commandLine[2];
            if (pieces.has(changePiece)) {
                pieces.get(changePiece).key = newKey;
                console.log(`Changed the key of ${changePiece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${changePiece} does not exist in the collection.`)
            }
        } else {
            break;
        }

    }
    let output = Array.from(pieces.values());
    output.forEach(obj => {
        console.log(`${obj.name} -> Composer: ${obj.composer}, Key: ${obj.key}`)
    });

}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)