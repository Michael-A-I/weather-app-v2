

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

const cities = []

let input = document.querySelector("#w-location")

// fetch list of cities to regex through and enter into API call. 
fetch("./city.list.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("http error" + response.status)
    }
    return response.json();
  })
  .then(response => console.log(cities.push(response)))


// TODO: hook regex function to above data 1. display potential list of data 2.apon selection enter into api and do a call.


fetch(endpoint)
  .then(data => data.json())

//TODO: fetch weather data for selected city with this dynamically 1. display data selected. 


// RegExp
function findMatches(wordToMatch, cities) {

  // console.log(cities)
  return cities.filter(function (places, index) {
    //     figure out if city or stat matches typed search
    const regex = new RegExp(wordToMatch, 'gi')

    places.forEach(place => {
      if(place.name.match(regex)){
        
        console.log(place); 

      }

    
    });


  })

}

input.addEventListener("keyup", inputMatches)


function inputMatches() {
  // console.log(input.value)
  // console.log(cities)
  findMatches(input.value, cities)
}








//look through list of cities in the city.list.json file

// once user selects city in gui

// api call for data regarding city selected

// display data onto webpage. 

