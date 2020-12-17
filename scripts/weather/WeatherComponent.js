import {getParks, copiedParks} from "../parks/ParkProvider.js"

const eventHub = document.querySelector(".container")
const weatherHTML = document.querySelector(".weatherBox")

// PARK SELECT - LISTENER - RENDER WEATHER HTML
eventHub.addEventListener('parkChosen', event => {

  if (event.detail.parkThatWasChosen !== "0"){
      
      const parks = copiedParks()
      const parkChosen = parks.find( (aPark) => aPark.id === event.detail.parkThatWasChosen )  
      
      renderWeatherForPark(parkChosen) 
  }
})

// HTML representation of the weather
const renderWeatherForPark = (weather) => {
  weatherHTML.innerHTML = `
  <h2>Park Forecast</h2>
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

