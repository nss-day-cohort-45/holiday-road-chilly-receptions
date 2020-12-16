import {getParks, copiedParks} from "./ParkProvider.js"
const contentTarget = document.querySelector(".filters__park")
const eventHub = document.querySelector(".container")

// PARK SELECT - DISPATCH
eventHub.addEventListener("change", event => {

  if (event.target.id === "ParkSelect") {

      const customEvent = new CustomEvent("parkChosen", {
        // Only use detail for a dropdown type event - selecting something specific/ value
          detail: {
              parkThatWasChosen: event.target.value
          }
      })

      eventHub.dispatchEvent(customEvent)
  }
})

export const ParkSelect = () => {
  // Trigger fetching the API data and then loading it into application state
  getParks()
  .then( () => {
    // Get all convictions from application state
    const parks = copiedParks()
    render(parks)
  })
}

const render = parksCollection => {
  /*
  Use interpolation here to invoke the map() method on
  the convictionsCollection to generate the option elements.
  Look back at the example provided above.
  */
 contentTarget.innerHTML = `
 <select class="dropdown" id="ParkSelect">
 <option value="0">Chose your destination...</option>
 ${
   parksCollection.map((parks) => `
   <option value=${parks.id}>
   ${parks.fullName}
   </option>
   `)
  }
  </select>
  `
}


// DETAILS BUTTON
// eventHub.addEventListener("click", (event) => {
//       if (event.target.id.includes("??--")) {
//         const customEvent = new CustomEvent("detailsBtnClicked", {
//           detail: {
//             clickedParksDetailsButton: event.target.id.split("--")[1]
//           }
//         })
//         eventHub.dispatchEvent(customEvent)
//       }
//     })

export const Park = (parkObj) => {
  return `
    <article class="parks">
      <h2>${parkObj.fullName}</h2>
      </article>
      `
    }

    // DETAILS BUTTON
    //   <button id="associates--${parkObj.id}">Associate Alibis</button>




// parks: {
//     fullName: string
//     description: string
//     addresses: string
//     operatingHours: string
//     contacts.phoneNumbers.phoneNumber: string
//     id: number
//     }
    
    