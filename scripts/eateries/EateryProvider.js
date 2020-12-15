
let eateries = []

export const copiedEateries = () => {
    return eateries.slice()
} 

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then (
        response => response.json())
        .then (
            parsedEateries => {
                // console.table(parsedEateries)
                eateries = parsedEateries
            }
        )    
}