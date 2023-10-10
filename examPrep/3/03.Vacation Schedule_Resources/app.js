const loadButtonElement = document.getElementById("load-vacations");
const tasksUrl = `http://localhost:3030/jsonstore/tasks`;
const vacationListElement = document.getElementById("list");

const nameFormElement = document.getElementById("name");
const daysFormElement = document.getElementById("num-days");
const dateFormElement = document.getElementById("from-date");

loadButtonElement.addEventListener("click", loadVacations);
const addVacationButton = document.getElementById("add-vacation");
addVacationButton.addEventListener("click", addVacation);
const editVacationButton = document.getElementById("edit-vacation");
editVacationButton.addEventListener("click", editVacation);

let currentVacationId = "";
async function editVacation(e){
    e.preventDefault();
    const name = nameFormElement.value;
    const days = daysFormElement.value;
    const date = dateFormElement.value;
    const vacation = {
        name,
        days,
        date,
    }
    await fetch(`${tasksUrl}/${currentVacationId}`,{
        method: "PUT",
        body: JSON.stringify(vacation),
    });
    nameFormElement.value = "";
    daysFormElement.value = "";
    dateFormElement.value = "";

    addVacationButton.disabled = false;
    editVacationButton.disabled = true;

    await loadVacations();


}

async function addVacation (e){
    e.preventDefault();

    const name = nameFormElement.value;
    const days = daysFormElement.value;
    const date = dateFormElement.value;

    const vacation = {
        name,
        days,
        date,
    }
    fetch(tasksUrl, {
        method: "POST",
        body: JSON.stringify(vacation),
    });
    nameFormElement.value = "";
    daysFormElement.value = "";
    dateFormElement.value = "";

    await loadVacations();
}


async function loadVacations(){
    const response = await fetch(tasksUrl);
    const data = await response.json();

    vacationListElement.innerHTML = "";

    const vacations = Object.keys(data)
        .map(key => ({_id: key, ...data[key]}));

    for (const vacation of vacations) {
        const vacationElement = renderVacations(vacation);
        vacationListElement.appendChild(vacationElement);
        vacationElement.setAttribute("data-vacation-id",vacation._id) ;
    }

}
function renderVacations(vacation) {

    const divCourseElement = document.createElement("div");
    divCourseElement.className = "container";
    const nameHeadingElement = document.createElement("h2")
    nameHeadingElement.textContent = vacation.name;
    const numberOfDaysHeadingElement = document.createElement("h3");
    numberOfDaysHeadingElement.textContent = vacation.days;
    const dateHeadingElement = document.createElement("h3");
    dateHeadingElement.textContent = vacation.date;

    const changeElementButton = document.createElement("button");
    changeElementButton.className = "change-btn";
    changeElementButton.textContent = "Change";
    const doneElementButton = document.createElement("button");
    doneElementButton.className = "done-btn";
    doneElementButton.textContent = "Done";

    divCourseElement.appendChild(nameHeadingElement);
    divCourseElement.appendChild(numberOfDaysHeadingElement);
    divCourseElement.appendChild(dateHeadingElement);
    divCourseElement.appendChild(changeElementButton);
    divCourseElement.appendChild(doneElementButton);

    changeElementButton.addEventListener("click", () =>{
        nameFormElement.value = vacation.name;
        daysFormElement.value = vacation.days;
        dateFormElement.value = vacation.date;
         currentVacationId = divCourseElement.getAttribute("data-vacation-id");
         divCourseElement.remove();
         addVacationButton.disabled = true;
         editVacationButton.disabled = false;
    });
    doneElementButton.addEventListener("click", async() =>{
        await fetch(`${tasksUrl}/${vacation._id}`, {
            method: "DELETE",

        });
        await loadVacations();

    })


    return divCourseElement;
}