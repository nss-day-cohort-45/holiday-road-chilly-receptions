import { settings } from "../Settings.js"

let parks = []

export const copiedParks = () => {
    return parks.slice()
} 

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&api_key=${settings.npsKey}`)
    .then (
        response => response.json())
        .then (
            parsedParks => {
                console.table(parsedParks)
                parks = parsedParks
            }
        )    
}