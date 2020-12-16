import { copiedParks } from '../parks/ParkProvider.js'
import { copiedEateries } from "../eateries/EateryProvider.js"

const eventHub = document.querySelector(".container")
const chosenPark = document.querySelector(".parkChosen")
const chosenRestaurant = document.querySelector(".restaurantChosen")

// PARK SELECT - LISTENER
eventHub.addEventListener('parkChosen', event => {

  // If the user's selected value is not 0
  if (event.detail.parkThatWasChosen !== "0"){
      
      // Store your copiedParks array into a variable
      const parks = copiedParks()
      // Finding one object that matches the park ID to the park value that was selected
      const parkChosen = parks.find( (aPark) => aPark.id === event.detail.parkThatWasChosen )
      // Renders the full name of the park which is a property on the object of parkChosen
      // We needed to go down and dot notate to get the fullName property
      renderParkName(parkChosen.fullName)
  }
})

// HTML representation of the full name of the chosen park
const renderParkName = (parkName) => {
  chosenPark.innerHTML = `
  <h2>Chosen Park: ${parkName}</h2>
  `
}

// Eatery SELECT - LISTENER
eventHub.addEventListener('eateryChosen', event => {

  // If the user's selected value is not 0
  if (event.detail.eateryThatWasChosen !== "0"){
      
      // Store your copiedEateries array into a variable
      const eateries = copiedEateries()
      // Finding one object that matches the park ID to the park value that was selected
      const eateryChosen = eateries.find( (aRestaurant) => aRestaurant.id === parseInt(event.detail.eateryThatWasChosen) )
      // Renders the full name of the park which is a property on the object of parkChosen
      // We needed to go down and dot notate to get the fullName property
      renderRestaurantName(eateryChosen.businessName)
  }
})

// HTML representation of the full name of the chosen park
const renderRestaurantName = (restaurantName) => {
  chosenRestaurant.innerHTML = `
  <h2>Chosen Restaurant: ${restaurantName}</h2>
  `
}






// GRAVEYARD
// const render = (parks) => {
//   let parksArray = []
//   for (const park of parks) {
//     parksArray.push(Park(park))
//   }
  
//   previewComponent.innerHTML = `${parksArray.join("")}`
// }

// export const ParkChosenName = () => {
//   getParks().then( () => {
//     let parks = copiedParks()
//     render(parks)
//   })
// }

// eventHub.addEventListener('officerChosen', event => {

//   // Use the property you added to the event detail.
//   if (event.detail.officerThatWasChosen !== "0"){
//       /*
//           Filter the criminals application state down to the people that were arrested by the chosen officer
//       */
//       const officers = useOfficers()
//       const officer = officers.find( (officer) => officer.id === parseInt(event.detail.officerThatWasChosen) )

//       const criminals = useCriminals()
//       const matchingCriminals = criminals.filter( (criminal) => criminal.arrestingOfficer === officer.name)

//       render(matchingCriminals)
//   }
// })

