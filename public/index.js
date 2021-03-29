

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


// const cityListItem = document.querySelector(".city-list-item")

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

  // array of citiy objects found via regex stored in array
  let matchesFound = []

  // console.log(cities)
  return cities.filter(function (places, index) {
    //     figure out if city or stat matches typed search
    const regex = new RegExp(wordToMatch, 'gi')
    const cityUl = document.querySelector(".city-list")

    places.forEach(function(place, index) {
      if(place === ""){
        return;
      }

      if(place.name.match(regex) || place.country.match(regex)){
        // push cities obj. data into local context.
        matchesFound.push(place)
      }
      
      
    });
    
    console.log(matchesFound);
    // display list of elements in dom
    displayList(cityUl,matchesFound);
   
    

  })

}

input.addEventListener("keyup", inputMatches)


function inputMatches() {
  // console.log(input.value)
  // console.log(cities)
  findMatches(input.value, cities)
  // console.log(place)

}



function displayList(domElement,matchesFound){
  //take in a dom element which should be global anyways. 
  // take in data within execution context 
  // dropdown menu
  // loop through data and append data to dom list. 
  matchesFound.forEach(element => {
    console.log(element.name);

  let li = document.createElement("li");
  // set id of html element to object id in JSON file
  li.setAttribute('id',element.id);
  li.appendChild(document.createTextNode(`${element.name},${element.state || element.country}`));
  domElement.appendChild(li);
  });


}

  






//look through list of cities in the city.list.json file

// once user selects city in gui
// create function that will take search data and place it in the gui. as a link 4 api call. 

// api call for data regarding city selected

// display data onto webpage. 

