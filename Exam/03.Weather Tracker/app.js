function attachEvents() {
    document.getElementById("load-history").addEventListener("click", loadHistory);
    addWeatherButton.addEventListener("click", addWeather);
    editButtonElement.addEventListener("click", editWeather);
}

const editButtonElement = document.getElementById("edit-weather");
const addWeatherButton = document.getElementById("add-weather");
const baseUrl = `http://localhost:3030/jsonstore/tasks`;
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const dateElement = document.getElementById("date");

let id = "";
const containerList = document.getElementById("list");


async function editWeather(ev) {

    ev.preventDefault();
    const location = locationElement.value;
    const temperature = temperatureElement.value;
    const date = dateElement.value;

    if(location.textContent == "" || temperature.textContent == "" || date.textContent == ""){
        return ;
    }
    const weth = {
        location,
        temperature,
        date,
    }

    await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(weth),
    });
    clearInputs();

    editButtonElement.disabled = true;
    addWeatherButton.disabled = false;

    await loadHistory(ev);
}

async function addWeather(ev) {
    ev.preventDefault();
    const location = locationElement.value;
    const temperature = temperatureElement.value;
    const date = dateElement.value;

    if(!location || !temperature || !date){
        return ;
    }
    const weth = {
        location,
        temperature,
        date,
    }
    await fetch(baseUrl, {
        method: "POST",

        body: JSON.stringify(weth),
    });
    await loadHistory(ev);

    clearInputs();

}

function createWeather() {

    const location = locationElement.value;
    const temperature = temperatureElement.value;
    const date = dateElement.value;

if(!location || !temperature || !date){
    return ;
}
    const weth = {
        location,
        temperature,
        date,
    }
    return weth;
}

function clearInputs() {
    locationElement.value = "";
    temperatureElement.value = "";
    dateElement.value = "";

}

async function loadHistory(ev) {
    ev.preventDefault();
    containerList.innerHTML = "";
    const response = await fetch(baseUrl);

    const data = await response.json();
    const weathers = Object.keys(data)
        .map(key => ({_id: key, ...data[key]}));

    for (const weather of weathers) {
        let weatherElement = renderWeather(weather);
        weatherElement.setAttribute("data-weather-id", weather._id);
        containerList.appendChild(weatherElement);
    }
}

function renderWeather(weather) {
    const divContainer = document.createElement("div");
    divContainer.className = "container";

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = weather.location;
    divContainer.appendChild(locationHeading);
    const dateHeading = document.createElement("h3");
    dateHeading.textContent = weather.date;
    divContainer.appendChild(dateHeading);
    const temperatureHeading = document.createElement("h3");
    temperatureHeading.className = "celsius";
    temperatureHeading.textContent = weather.temperature;
    divContainer.appendChild(temperatureHeading);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";
    const changeButton = document.createElement("button");
    changeButton.className = "change-btn";
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        locationElement.value = weather.location;
        temperatureElement.value = weather.temperature;
        dateElement.value = weather.date;
        id = divContainer.getAttribute("data-weather-id");

        editButtonElement.disabled = false;
        addWeatherButton.disabled = true;
    })
    buttonsContainer.appendChild(changeButton);
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", async (e) => {
        e.preventDefault();
        await fetch(`${baseUrl}/${weather._id}`, {
            method: "DELETE",

        });

        divContainer.remove();
        await loadHistory();
    })
    buttonsContainer.appendChild(deleteButton);
    divContainer.appendChild(buttonsContainer);


    return divContainer;


}


attachEvents();