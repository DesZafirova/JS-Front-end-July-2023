function roadRadar(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    const currentSpeedLimits = speedLimits[area];
    const speedOverLimit = speed - currentSpeedLimits;
    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimits} zone`);
        return;
    }

    const speedingMassage =
        speedOverLimit <= 20
            ? 'speeding'
            : speedOverLimit <= 40
                ? 'excessive speeding'
                : 'reckless driving';
    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimits} - ${speedingMassage}
    `);

//     if ( speedOverLimit <= 20){
//         console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${maxSpeed} -
// speeding`)
//     }else if (speedOverLimit <= 40){
//         console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${maxSpeed} -
// excessive speeding`)
//     }else if (speedOverLimit > 40){
//         console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${maxSpeed} -
// reckless driving`)
//     }

}

roadRadar(40, 'city');
roadRadar(200, 'motorway');
