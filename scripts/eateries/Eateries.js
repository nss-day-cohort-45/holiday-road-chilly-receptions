import {getEateries, copiedEateries } from "./EateryProvider.js"
const contentTarget = document.querySelector(".filters__eatery")


export const EateriesSelect = () => {
    // Trigger fetching the API data and then loading it into application state
    getEateries()
    .then( () => {
      // Get all convictions from application state
      const eateries = copiedEateries()
      render(eateries)
    })
}

const render = eateriesCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="ParkSelect">
            <option value="0">Chose your ...</option>
            ${
                eateriesCollection.map((eateries) => `
                  <option value=${eateries.id}>
                    ${eateries.buisnessName}
                  </option>
                `)
            }
        </select>
    `
}