// 1 Age

function findByAge(age) {
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}
findByAge(1);

//2 Vacation

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

//3 Leap Year

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

//4 Print and Sum
function printAndSum(start, end) {
  const numbers = [];
  let sum = 0;
  for (let index = start; index <= end; index++) {
    numbers.push(index);
    sum += index;
  }
  console.log(numbers.join(" "));
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);

//5  Multiplication Table
function multiplicationTable(number) {
  for (let index = 1; index <= 10; index++) {
    console.log(`${number} X ${index} = ${number * index}`);
  }
}
multiplicationTable(2);

//6 Sum Digits
function sumDigits(number) {
  const digitsString = number.toString();
  let sum = 0;
  for (let index = 0; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
  }
  console.log(sum);
}
sumDigits(123546);

//7 Chars To String
function charsToString(a, b, c) {
  console.log(`${a}${b}${c}`);
  //charsToString(a + b + c);
}
charsToString("a", "b", "c");

//8 Reversed Chars

function reversedChars(a, b, c) {
  console.log(`${c} ${b} ${a}`);
}
reversedChars("a", "b", "c");

//9 Fruit
function calculateMoneyForFruits(fruitType, weightInGrams, pricePerKilogram) {
  const weightInKilograms = weightInGrams / 1000;
  const totalPrice = weightInKilograms * pricePerKilogram;
  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${weightInKilograms.toFixed(
      2
    )} kilograms ${fruitType}.`
  );
}
calculateMoneyForFruits("orange", 2500, 1.8);

//10 Same Numbers
function sameNumbers(number) {
  const digitsString = number.toString();
  let isConsistent = true;
  let sum = Number(digitsString[0]);

  for (let index = 1; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
    if (digitsString[index] !== digitsString[index - 1]) {
      isConsistent = false;
    }
  }
  console.log(isConsistent);
  console.log(sum);
}
sameNumbers(1234);
