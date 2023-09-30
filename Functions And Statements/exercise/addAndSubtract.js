function addAndSubtract(x, y, z) {

    function sum() {
    return x + y;
    }
    const firstTwo = sum(x, y);
    function subtract(){
        return firstTwo - z;
    }

    console.log(subtract())
}

addAndSubtract(23,6,10)