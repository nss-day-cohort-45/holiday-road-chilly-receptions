import { getParks } from "./parks/ParkProvider.js"
import { getEateries } from "./eateries/EateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js"
import { ParkSelect } from "./parks/ParksComponent.js"
import { EateriesSelect } from "./eateries/eateries.js"

getParks()
getEateries()
getAttractions()
ParkSelect()
EateriesSelect()