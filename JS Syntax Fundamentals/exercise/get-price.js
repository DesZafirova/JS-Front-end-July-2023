function getPrice(count, type, day) {
    let sum = 0;
    if (type === "Students") {
        if (day === "Friday") {
            sum = count * 8.45;
        } else if (day === "Sathurday") {
            sum = count * 9.8;
        } else if (day === "Sunday") {
            sum = count * 10.46;
        }
        if (count >= 30) {
            sum = sum * 0.85;
        }
    } else if (type === "Buisness") {
        if (day === "Friday") {
            sum = count * 10.9;
        } else if (day === "Sathurday") {
            sum = count * 15.6;
        } else if (day === "Sunday") {
            sum = count * 16;
        }
        if (count >= 100) {
            count -= 10;
        }
    } else if (type === "Regular") {
        if (day === "Friday") {
            sum = count * 15;
        } else if (day === "Sathurday") {
            sum = count * 20;
        } else if (day === "Sunday") {
            sum = count * 22.5;
        }
        if (count >= 10 && count <= 20) {
            sum = sum * 0.95;
        }
    }

    console.log(`Total price: ${sum.toFixed(2)}`);
}

getPrice(30, "Students", "Sunday");
