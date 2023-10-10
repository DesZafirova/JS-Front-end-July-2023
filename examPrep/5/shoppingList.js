function solve(input) {
    let products = input.shift().split("!");
    let setOfProducts = new Set();
    products.forEach(p => setOfProducts.add(p));

    let nextLine = input.shift();
    while (nextLine !== "Go Shopping!"){
        let arr = nextLine.split(" ");
        const command = arr[0];
        const product = arr[1];
        switch (command){
            case "Urgent":
                if (!setOfProducts.has(product)) {
                    products.unshift(product);
                    setOfProducts.add(product);
                }
                break
            case "Unnecessary":
                if (setOfProducts.has(product)) {
                    let index = products.indexOf(product);
                    products.splice(index, 1);
                    setOfProducts.delete(product);
                }
                break
            case "Correct":
                if (setOfProducts.has(product)) {
                    let index = products.indexOf(product);
                    let newProduct = arr[2];
                    products.splice(index, 1, newProduct);
                    setOfProducts.delete(product);
                    setOfProducts.add(newProduct);
                }
                break
            case "Rearrange":
                if (setOfProducts.has(product)) {
                    let index = products.indexOf(product);

                    products.splice(index, 1);
                    products.push(product);
                }
                break
        }


        nextLine = input.shift();
    }
    console.log(products.join(", "));

}

solve
(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
solve
(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])

