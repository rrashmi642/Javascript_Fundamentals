// Task 1: Select all the required elements from the DOM and store them in variables.
// Task 2: Create a function fetchData that will fetch the data from the weather API.
// Task 3: Create a function search that will take the input value from the form and call the fetchData function.
// Task 4: Add an event listener to the form that will call the search function when the form is submitted.
// Task 5: Create a function updateDOM that will update the DOM with the fetched data.
// Task 6: Call the fetchData function with a default city name.
const temp = document.querySelector(".temp");
const weather_location = document.querySelector(".time_location p");
const location_time = document.querySelector(".time_location span");
const condition = document.querySelector(".weather_condition span");
const emoji = document.querySelector(".weather_condition img");

const searchfield = document.querySelector(".searchField");
const form = document.querySelector("form");
let target = "pune";
function searchFun(e) {
  // preventDefault here we are preventing the page from auto reload
  e.preventDefault();
  target = searchfield.value;
  getDataFromApi(target);
}

form.addEventListener("submit", searchFun);

async function getDataFromApi(target) {
  try {
    let url = `https://api.weatherapi.com/v1/current.json?key=0be1228a43274a17aef153753250606&q=${target}&aqi=no`;

    const response = await fetch(url);
    // .json will fetch the json data from the response

    const data = await response.json();
    console.log("data-->", data);
    if (data) {
      const currentTemperature = data.current.temp_c;
      const currentCondition = data.current.condition.text;
      const locationName = data.location.name;
      const locationTime = data.location.locationTime;
      const conditionEmoji = data.current.condition.icon;

      updateDom(
        currentTemperature,
        currentCondition,
        locationName,
        locationTime,
        conditionEmoji
      );
    } else {
      console.log("Failed to fetch data from API!");
    }
  } catch (error) {
    console.log(error);
  }
}

function updateDom(
  currentTemperature,
  currentCondition,
  locationName,
  locationTime,
  conditionEmoji
) {
  temp.textContent = currentTemperature;
  weather_location.textContent = locationName;
  location_time.textContent = locationTime;
  condition.textContent = currentCondition;
  emoji.src = conditionEmoji;
}
// const baseURL = "https://api.weatherapi.com";
// const apiKey = "41f6ed5317b74a259f7112947251506";
// const temperatureField = document.querySelector('.temp');
// const cityField = document.querySelector(".time_location p");
// const dateField = document.querySelector(".time_location span");
// const emojiField= document.querySelector(".weather_condition img");
// const weatherField = document.querySelector(".weather_condition");
// const errorField = document.querySelector(".errorText");
// const searchField = document.querySelector(".searchField");
// const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (searchField.value) {
//     getWeatherForCity(searchField.value);
//   }
// });

// async function getWeatherForCity(city) {
//   try {
//     //1. Call the weather API
//     const response = await fetch(
//       `${baseURL}/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
//     );

//     const data = await response.json();

//     if (!data.location) {
//       throw new Error();
//     }
//     const { location, current } = data;
//     const { name, localtime } = location;
//     const {
//       temp_c,
//       condition: { icon, text },
//     } = current;
//     console.log({ name, localtime, temp_c, icon, text });
//     //2. Update the DOM based on API response

   
//     temperatureField.innerText=`${temp_c}°C `;
//     cityField.innerText=name;
//     dateField.innerText=localtime;
//     // emojiField.src = icon;
//     emojiField.src = data.current.condition.icon;
//     console.log(emojiField.src);
//     console.log("data -->" + data);

//     weatherField.innerText=text;
//    searchField.value="";
//     errorField.style.display = "none";
    

//   } catch (err) {
//     //handle error
//     searchField.value="";
//     errorField.innerText = "Please enter a valid location";
//     errorField.style.display = "block";
//     return;
//   }
// }
