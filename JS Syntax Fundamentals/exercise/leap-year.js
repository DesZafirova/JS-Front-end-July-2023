function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        console.log("Yes");
    } else if (year % 400 === 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

leapYear(2003);
