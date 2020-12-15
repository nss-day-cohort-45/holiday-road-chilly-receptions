import { Park } from '../parks/ParksComponent.js'
import { ParkSelect } from '../parks/ParksComponent.js'
import { getParks, copiedParks } from '../parks/ParkProvider.js'

const previewComponent = document.querySelector(".itineraryPreview")

const render = (parks) => {
  let parksArray = []
  for (const park of parks) {
    parksArray.push(Park(park))
  }
  
  previewComponent.innerHTML = `${parksArray.join("")}`
}

export const ParkChosenName = () => {
  getParks().then( () => {
    let parks = copiedParks()
    render(parks)
  })
}


// // Listen for the custom event you dispatched in ConvictionSelect
// eventHub.addEventListener('crimeChosen', event => {

//   // Use the property you added to the event detail.
//   if (event.detail.crimeThatWasChosen !== "0"){
//       /*
//           Filter the criminals application state down to the people that committed the crime
//       */
//       console.log('crime', event.detail);
//       const crimes = useConvictions()
//       const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen) )

//       const criminals = useCriminals()
//       const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)

//       render(matchingCriminals)
//   }
// })

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

