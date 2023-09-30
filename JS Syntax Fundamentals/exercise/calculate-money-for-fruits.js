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
