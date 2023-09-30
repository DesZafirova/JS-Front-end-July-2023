function solve(input) {
    function washChunk(chunk) {
        console.log("Transporting and washing");
        return Math.floor(chunk);
    }

    const [target, ...chunks] = input;
    for (let chunk of chunks) {
        console.log(`Processing chunk ${chunk} microns`)
        while (chunk > target) {
            if (chunk / 4 >= target) {
                let count = 0;
                while (chunk / 4 >= target) {
                    chunk = chunk / 4;
                    count++;
                }
                console.log(`Cut x${count}`);
                chunk = washChunk(chunk);

            }
            if (chunk - chunk * 0.2 >= target) {
                let count = 0;
                while (chunk - chunk * 0.2 >= target) {
                    chunk = chunk - chunk * 0.2;
                    count++;
                }
                console.log(`Lap x${count}`);
                chunk = washChunk(chunk);

            }
            if (chunk - 20 >= target) {
                let count = 0;
                while (chunk - 20 >= target) {
                    chunk -= 20;
                    count++;
                }
                console.log(`Grind x${count}`);
                chunk = washChunk(chunk);

            }
            if (chunk - 2 >= target - 1) {
                let count = 0;
                while (chunk - 2 >= target - 1) {
                    chunk -= 2;
                    count++;
                }
                console.log(`Etch x${count}`);
                chunk = washChunk(chunk);

            }
        }
        if (chunk + 1 === target) {
            chunk += 1;
            console.log(`X-ray x1`)
        }
        console.log(`Finished crystal ${target} microns`)

    }
}

solve([1375, 50000])
solve([1000, 4000, 8100])