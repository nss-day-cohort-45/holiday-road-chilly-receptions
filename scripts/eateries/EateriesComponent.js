import {getEateries, copiedEateries } from "./EateryProvider.js"
const contentTarget = document.querySelector(".filters__eatery")
const eventHub = document.querySelector(".container")
 
// Eatery SELECT - DISPATCH
eventHub.addEventListener("change", event => {

  if (event.target.id === "EateriesSelect") {

      const customEvent = new CustomEvent("eateryChosen", {
        // Only use detail for a dropdown type event - selecting something specific/ value
          detail: {
              eateryThatWasChosen: event.target.value
          }
      })

      eventHub.dispatchEvent(customEvent)
  }
})


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
        <select class="dropdown" id="EateriesSelect">
            <option value="0">Chose your restaurant...</option>
            ${
                eateriesCollection.map((eateries) => `
                  <option value=${eateries.id}>
                    ${eateries.businessName}
                  </option>
                `)
            }
        </select>
    `
}