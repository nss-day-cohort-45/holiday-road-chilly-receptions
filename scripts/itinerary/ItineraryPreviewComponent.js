import { copiedParks } from '../parks/ParkProvider.js'
import { copiedEateries } from '../eateries/EateryProvider.js'
import { copiedAttractions } from "../attractions/AttractionProvider.js"


const eventHub = document.querySelector(".container")
const chosenPark = document.querySelector(".parkChosen")
const chosenRestaurant = document.querySelector(".restaurantChosen")
const chosenAttraction = document.querySelector(".attractionChosen")
const saveButton = document.querySelector(".saveButton")

eventHub.addEventListener('parkChosen', event => {
  if (event.detail.parkThatWasChosen !== "0") {
    renderSaveButton()
  }
})

eventHub.addEventListener('restaurantChosen', event => {
  if (event.detail.eateryThatWasChosen !== "0") {
    renderSaveButton()
  }
})

eventHub.addEventListener('attractionChosen', event => {
  if (event.detail.attractionThatWasChosen !== "0") {
    renderSaveButton()
  }
})

export const renderSaveButton = () => {
  saveButton.innerHTML = `<button id="saveButton">Save Button</button>`
}

// PARK SELECT - LISTENER
eventHub.addEventListener('parkChosen', event => {

  // If the user's selected value is not 0
  if (event.detail.parkThatWasChosen !== "0"){ //if something is selected, populate what is selected
      
      // Store your copiedParks array into a variable
      const parks = copiedParks()
      // Finding one object that matches the park ID to the park value that was selected
      const parkChosen = parks.find( (aPark) => aPark.id === event.detail.parkThatWasChosen )  
      // Renders the full name of the park which is a property on the object of parkChosen
      // We needed to go down and dot notate to get the fullName property
      
      renderParkName(parkChosen) //We are using renderParkName, and parkChosen is the object that we're passing through it.
  }
})

// HTML representation of the full name of the chosen park

/*
In renderParkName, park is like taco. It's just a word that is only connected
to other words within renderParkName. The thing that it accepts is an
object. 
*/
const renderParkName = (park) => {
  chosenPark.innerHTML = `
  <h2>Chosen Park: ${park.fullName}</h2>
  <button id="parksButton--${park.id}">Park Details</button>
  `
}


// Eatery SELECT - LISTENER
eventHub.addEventListener('eateryChosen', event => {

  // If the user's selected value is not 0
  if (event.detail.eateryThatWasChosen !== "0"){
      
      // Store your copiedve attractions array into a variable
      const eateries = copiedEateries()
      // Finding one object that matches the restaurant ID to the restaurant value that was selected
      const eateryChosen = eateries.find( (aRestaurant) => aRestaurant.id === parseInt(event.detail.eateryThatWasChosen) )
      // Renders the full name of the restaurant which is a property on the object of restaurantChosen
      // We needed to go down and dot notate to get the fullName property
      renderRestaurantName(eateryChosen.businessName)
  }
})

// HTML representation of the full name of the chosen restaurant
const renderRestaurantName = (restaurantName) => {
  chosenRestaurant.innerHTML = `
  <h2>Chosen Restaurant: ${restaurantName}</h2>
  <button id="restaurantButton--${restaurantName.id}">Restaurant Details</button>
  `
}

// Attraction SELECT - LISTENER
eventHub.addEventListener('attractionChosen', event => {

  // If the user's selected value is not 0
  if (event.detail.attractionThatWasChosen !== "0"){
      
      // Store your copiedAttraction array into a variable
      const attractions = copiedAttractions()
      // Finding one object that matches the attraction ID to the attraction value that was selected
      const attractionChosen = attractions.find( (aAttraction) => aAttraction.id === parseInt(event.detail.attractionThatWasChosen) )
      // Renders the full name of the restaurant which is a property on the object of attractionChosen
      // We needed to go down and dot notate to get the Name property
      renderAttractionName(attractionChosen.name)
  }
})

// HTML representation of the full name of the chosen attraction
const renderAttractionName = (attractionName) => {
  chosenAttraction.innerHTML = `
  <h2>Chosen Attraction: ${attractionName}</h2>
  <button id="attractionButton--${attractionName.id}">Attraction Details</button> `
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

