import { getParks } from "./parks/ParkProvider.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import {  ParkSelect } from "./parks/ParksComponent.js"
import { AttractionSelect } from "./attractions/AttractionsComponent.js"
import { EateriesSelect } from "./eateries/EateriesComponent.js"
import { renderSaveButton } from "./itinerary/ItineraryPreviewComponent.js"
import "./itinerary/ItineraryPreviewComponent.js"
import "./Buttons/detailsButtons.js"
import { getWeather } from "./weather/WeatherProvider.js"
import "./weather/WeatherComponent.js"

// getParks()
getEateries()
getAttractions()
ParkSelect()
AttractionSelect()
EateriesSelect() 
renderSaveButton()
