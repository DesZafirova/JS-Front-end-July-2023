//2
function solve(text){
    const result = text.toUpperCase()
        .split(/\W+/)
        .filter((w) => w.length >1)
        .join(", ");

       console.log(result);
}
solve("Hi, how are you?")