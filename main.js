let cityname = prompt('give me the name of the city').toLowerCase()
let capLetter = cityname.slice(0,1).toUpperCase() + cityname.slice(1)

let countryCode = prompt('give me the country code')

let apiKey = 'e6a08763cdce8cb3637e718d93a2601d'
let latitude
let longitude

fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityname},${countryCode}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        latitude = data[0].lat
        longitude = data[0].lon
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h1').innerText = `Weather in ${capLetter}: ${Math.floor(data.main.temp - 273.15)} Celsius`
            // console.log(`${Math.floor(data.main.temp - 273.15)} Celsius`)
        })
        .catch(err => {
            console.log(`error by getting weather information: ${err}`)
        })
    })
    .catch(err => {
        console.log(`error by getting coordinates: ${err}`)
    })

   