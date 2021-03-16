

/*
....###....########..####
...##.##...##.....##..##.
..##...##..##.....##..##.
.##.....##.########...##.
.#########.##.........##.
.##.....##.##.........##.
.##.....##.##........####
*/

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c144deeef83c9fc568b52b95903fb474', true)

request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)
  console.log(data);
}

// Send request
// request.send()



function search(response){
    
}


const apiKey = "c144deeef83c9fc568b52b95903fb474";

const apiCall = "api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"

const endpoint = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c144deeef83c9fc568b52b95903fb474"
// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []

fetch(endpoint)
.then(data => data.json())
.then(data => cities.push(data))

// Reg
function findMatches(wordToMatch,cities){
  return cities.filter(place =>{
//     figure out if city or stat matches typed search
    const regex = new RegExp(wordToMatch, 'gi')
    return place.name.match(regex) || place.sys.country.match(regex)
  })
}
