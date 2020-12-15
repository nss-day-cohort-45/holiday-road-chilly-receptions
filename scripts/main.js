import { getParks } from "./parks/ParkProvider.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { ParkSelect } from "./parks/ParksComponent.js"
import { AttractionSelect } from "./attractions/AttractionsComponent.js"
import { EateriesSelect } from "./eateries/EateriesComponent.js"
import { ParkChosenName } from "./preview/ItineraryPreviewComponent.js"

getParks()
getEateries()
getAttractions()
ParkSelect()
AttractionSelect()
EateriesSelect() 
ParkChosenName()