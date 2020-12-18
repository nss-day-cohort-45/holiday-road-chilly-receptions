import {  ParkSelect } from "./parks/ParksComponent.js"
import { AttractionSelect } from "./attractions/AttractionsComponent.js"
import { EateriesSelect } from "./eateries/EateriesComponent.js"
import { renderSaveButton } from "./itinerary/ItineraryPreviewComponent.js"
import "./itinerary/ItineraryPreviewComponent.js"
import "./Buttons/detailsButtons.js"
import { getWeather } from "./weather/WeatherProvider.js"
import "./weather/WeatherComponent.js"

ParkSelect()
AttractionSelect()
EateriesSelect() 
renderSaveButton()


const steph = {
    currently: {
        daily: "daily is annoying",
        minutely: "rickie is awesome"
    },
    awesomeLevel: "100%"
}


console.log(steph.awesomeLevel)