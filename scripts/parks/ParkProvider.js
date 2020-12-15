import { settings } from "../Settings.js"

let parks = []

export const copiedParks = () =>  parks.slice()

console.log("is parks working",parks)

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&api_key=${settings.npsKey}`)
    .then(
        response => response.json())
        .then(
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks.data
            }
        )    
}
// parsedparks  is an obj that conatins an array. adding dot data to drop down one level into 
// parsedparks to get the array that lives inside of data