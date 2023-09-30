function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        const firsElement = arr.shift();
        arr.push(firsElement);
    }

}
arrayRotation([51, 47, 32, 61, 21], 2);
