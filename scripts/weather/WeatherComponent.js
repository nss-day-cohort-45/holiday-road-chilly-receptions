import {getParks, copiedParks} from "../parks/ParkProvider.js"
import { copiedWeather, getWeather } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherHTML = document.querySelector(".weatherBox")

// PARK SELECT - LISTENER - RENDER WEATHER HTML
eventHub.addEventListener('parkChosen', event => {
  
  if (event.detail.parkThatWasChosen !== "0"){
      
      const parks = copiedParks()
      const parkChosen = parks.find( (aPark) => aPark.id === event.detail.parkThatWasChosen )  
      getWeather(parkChosen.latitude, parkChosen.longitude)
      // passing a function into a function
      .then( () => {
        const weather = copiedWeather()
        renderWeatherForPark(weather) 
      } )
     
  }
})

// HTML representation of the weather
const renderWeatherForPark = (weather) => {
  // console.log(weather.daily[0].temp.max)
  weatherHTML.innerHTML = `
  <h2>Park Forecast</h2>
  <p> High: ${weather.daily[0].temp.min}</p>
  <p> Low: ${weather.daily[0].temp.max}</p>
  `
}


/* <button id="parksButton--${park.id}">Park Details</button> */

// We want to split the latitude and longitude from the chosen park, and see if that matches
// the weather's lat and long.
// From there we import the park's latitude and longitude into the WeatherProvider as parameters in the API

// export const parkLocation = {
	
// };

// When the user clicks on a park, we also want the weather to show for that chosen park --ParkSelect event

// Have the weather show up on the DOM -- HTML representation of weather

// From the park ID, we need to pull the latitude and longitude from it 
// then have that match the Weather API

