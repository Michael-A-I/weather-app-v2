

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

const cityUL = document.querySelector(".city-list")


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
function dataGetter(endpoint){


  fetch(endpoint)
    .then(data => data.json())
    .then(data => console.log(data))
}


//TODO: fetch weather data for selected city with this dynamically 1. display data selected. 



input.addEventListener("keyup", inputMatches)


function inputMatches() {
  
  const cityUl = document.querySelector(".city-list")
  
  removeAllChildNodes(cityUl);
  findMatches(input.value, cities)
  
  
}


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
      if(place ===""|| place === null || place ===" "){
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



function displayList(domElement,matchesFound){
  //take in a dom element which should be global anyways. 
  // take in data within execution context 
  // dropdown menu
  // loop through data and append data to dom list. 

// clear list first, then repopulate. 



  matchesFound.forEach(element => {
    console.log(element.name);

  let li = document.createElement("li");
  let a =   document.createElement("a");
  // set id of html element to object id in JSON file
  li.setAttribute('id',element.id);
  li.setAttribute('class',"city-list-item");
  a.textContent = `${element.name},${element.state || element.country}`;
  a.setAttribute('href',`#`);
  li.appendChild(a);
  domElement.appendChild(li);
  });


}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// on click return api of data. 
cityUL.addEventListener('click', function(e){
  e.preventDefault();
  let targetId = e.explicitOriginalTarget.parentNode.id;
  let apiCallId = `http://api.openweathermap.org/data/2.5/forecast?id=${targetId}&appid=${apiKey}`
  
  console.log(apiCallId)

  dataGetter(apiCallId);

})


// TODO: add event listner on parent to lists > on click api call on ID and display data
