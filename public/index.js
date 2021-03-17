

/*
....###....########..####
...##.##...##.....##..##.
..##...##..##.....##..##.
.##.....##.########...##.
.#########.##.........##.
.##.....##.##.........##.
.##.....##.##........####
*/

const apiKey = "c144deeef83c9fc568b52b95903fb474";

const apiCall = "api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

const endpoint = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c144deeef83c9fc568b52b95903fb474"
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const citiesFile = require('../city.list.json');
// var mydata = JSON.parse(city.list.json);
// console.log(mydata);
const cities = []




// fetch list of cities to regex through and enter into API call. 
fetch("./city.list.json")
.then(response => {
  if(!response.ok){
    throw new Error("http error"+response.status)
  }
  return response.json();
})
.then(response => console.log(response))
// TODO: hook regex function to above data 1. display potential list of data 2.apon selection enter into api and do a call.


fetch(endpoint)
.then(data => data.json())
.then(data => cities.push(data))
//TODO: fetch weather data for selected city with this dynamically 1. display data selected. 


// Reg
function findMatches(wordToMatch,cities){
  return cities.filter(place =>{
//     figure out if city or stat matches typed search
    const regex = new RegExp(wordToMatch, 'gi')
    return place.name.match(regex) || place.sys.country.match(regex)
  })
}





//look through list of cities in the city.list.json file

// once user selects city in gui

// api call for data regarding city selected

// display data onto webpage. 

