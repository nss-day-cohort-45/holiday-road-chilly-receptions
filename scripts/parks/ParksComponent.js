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


// DETAILS BUTTON - DISPATCH

/*
The user has clicked on a button that we are listen to (the button is Park 
Details). The id on the button is parksButton--[cray ID]. We used split to
put the id and the cray id into two objects inside of an array, and then sent
the second half (the cray part) to our event listener called detailsBtnClicked.
Details is an object contained within the custom event that we assigned the
property of parkId, and we let that equal what we split off - the part that we
wanted, which was the cray id from the park. And then we dispatched this
*/
eventHub.addEventListener("click", event => {
      if (event.target.id.startsWith("parksButton")) {
        const secondHalfOfId = event.target.id.split("--")[1]
        const customEvent = new CustomEvent("parkDetailsBtnClicked", {
            detail: {
                parkId: secondHalfOfId
            }
        })

        eventHub.dispatchEvent(customEvent)
      }
})

// export const Park = (parkObj) => {
//   return `
//     <article class="parks">
//       <h2>${parkObj.fullName}</h2>
      
//       </article>

//       `
//     }

    // DETAILS BUTTON
      // <button id="associates--${parkObj.id}">Associate Alibis</button>




// parks: {
//     fullName: string
//     description: string
//     addresses: string
//     operatingHours: string
//     contacts.phoneNumbers.phoneNumber: string
//     id: number
//     }
    
    