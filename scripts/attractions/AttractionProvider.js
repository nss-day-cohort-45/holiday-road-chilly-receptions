

let attractions = []

export const copiedAttractions = () => {
    return attractions.slice()
} 

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then (
        response => response.json())
        .then (
            parsedAttractions => {
                console.table(parsedAttractions)
                attractions = parsedAttractions
            }
        )    
}