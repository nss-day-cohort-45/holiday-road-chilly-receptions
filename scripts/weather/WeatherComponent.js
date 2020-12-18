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

  /*in the img element we got the src ("source") URL from the weather API directions, we scrolled down to Fields in API response,
   and then kept scrolling until we reached the daily properties and it gave us a unique URL for the daily properties, 
   and we used interpolation and then dot notation to get to

   Note to self: I cannot make an img on a page, if I don't give it a SOURCE
   */
  weatherHTML.innerHTML = `
  <section class="weatherContent">
  <div><h2 class="parkForecast">Park Forecast</h2></div> 
    <div class="rickiesBox">
      <div class="dailyForecast">
        <div class="weatherIcon"><img  src="http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png"> </div>
        <p> High: ${weather.daily[0].temp.min}&deg</p>
        <p> Low: ${weather.daily[0].temp.max}&deg</p>
      </div>

      <div class="dailyForecast">
        <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png"></div>
        <p> High: ${weather.daily[1].temp.min}&deg</p>
        <p> Low: ${weather.daily[1].temp.max}&deg</p>
      </div>

      <div class="dailyForecast">
        <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png"></div>
        <p> High: ${weather.daily[2].temp.min}&deg</p>
        <p> Low: ${weather.daily[2].temp.max}&deg</p>
      </div>

      <div class="dailyForecast">
        <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png"></div>
        <p> High: ${weather.daily[3].temp.min}&deg</p>
        <p> Low: ${weather.daily[3].temp.max}&deg</p>
      </div>

      <div class="dailyForecast">
        <div class="weatherIcon"><img class="weatherIcon" src="http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png"></div>
        <p> High: ${weather.daily[4].temp.min}&deg</p>
        <p> Low: ${weather.daily[4].temp.max}&deg</p>
      </div>
    </div>
  </section>  
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

