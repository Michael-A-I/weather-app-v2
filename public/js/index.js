

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


const cities = []

let input = document.querySelector("#w-location")

const cityUL  = document.querySelector(".city-list")

// const cityListItem = document.querySelector(".city-list-item")

// fetch list of cities to regex through and enter into API call. 
fetch("./js/city.list.json")
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
    .then(data => htmlfunction(data))
}


//TODO: fetch weather data for selected city with this dynamically 1. display data selected. 



input.addEventListener("keyup", inputMatches)


function inputMatches() {
  const cityUl = document.querySelector(".city-list")
  removeWeatherData();
  removeAllChildNodes(cityUl);
  
  // check if input has atleast 3 characters inside before search for speed. 
  if(input.value.split('').length > 2){
  // find list of matches in json based on input
    findMatches(input.value, cities)
}
  
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
    // console.log(element.name);

  let li = document.createElement("li");
  let a =   document.createElement("a");
  // set id of html element to object id in JSON file
  li.setAttribute('id',element.id);
  li.setAttribute('class',"city-list-item");
  // li.setAttribute('class','');
  a.textContent = `${element.name}, ${element.state || element.country}`;
  a.setAttribute('href',`#`);
  a.setAttribute('class','link-style')
  li.appendChild(a);
  domElement.appendChild(li);
  });


}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

//Links data
// on click return api of data. 
cityUL.addEventListener('click', function(e){
  e.preventDefault();
  let targetId = e.explicitOriginalTarget.parentNode.id;
  let apiCallId = `http://api.openweathermap.org/data/2.5/weather?id=${targetId}&appid=${apiKey}`
  
  // console.log(apiCallId)

  removeAllChildNodes(cityUL)
   dataGetter(apiCallId);
  showWeatherData();
  

})

// After click, add data to webpage
function htmlfunction(data){
  const temp = document.querySelector('#temp')
  const location = document.querySelector("#location")
  const description = document.querySelector("#description")
  const icon    = document.querySelector('#icon')

  const weatherData = data.weather[0].description
  const iconData        = data.weather[0].icon
  
  temp.innerHTML         = `${Math.round((data.main.temp-273) * 9/5 +32)} f`;
  location.innerHTML     = data.name;
  description.innerHTML  = weatherData;

  if(iconData){
    let source = `/animated/${iconData}.svg`
    console.log(icon)

    icon.src = source
  }
// reset view to the top of page where data is located.
  window.scrollTo(0,0); 

}
// TODO: add event listner on parent to lists > on click api call on ID and display data


// function that removes weather data
function removeWeatherData(){
  let weatherData = document.querySelector('#weather-data-display')
  weatherData.setAttribute('class',"hide-data")
}

function showWeatherData(){
  let weatherData = document.querySelector('#weather-data-display')
  weatherData.setAttribute('class',"card special-card")

}
