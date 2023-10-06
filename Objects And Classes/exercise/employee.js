function getPersonalNumber(input) {
input.forEach((employee) => {
    console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
})
    // const employees = input.reduce((acc, curr) => {
    // acc[curr] = curr.length;
    //     return acc;
    // },{})
    // Object.entries(employees).forEach(([name, number]) => {
    //     console.log(`Name: ${name} -- Personal Number: ${number}`);
    // })
}

getPersonalNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])