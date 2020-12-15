import { getParks } from "./parks/ParkProvider.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { ParkSelect } from "./parks/ParksComponent.js"
import { AttractionSelect } from "./attractions/AttractionsComponent.js"

getParks()
getEateries()
getAttractions()
ParkSelect()
AttractionSelect()

