import { copiedAttractions } from "../attractions/AttractionProvider.js";
import { copiedParks, getParks } from "../parks/ParkProvider.js" 


const eventHub = document.querySelector('.container');
const parkPopUp = document.querySelector('.detailDialog')
const attractionPopUp = document.querySelector('.detailDialog')

/*

*/
eventHub.addEventListener('parkDetailsBtnClicked', evt => {
  const usingParkId = evt.detail.parkId; //parkId relates to the split off from the cray ID that we just received from our eventHub (from Parks component)
  const parks = copiedParks(); //making it available for use to access all of the parks, so it is an array of the parks
  const chosenPark = parks.find(park => park.id === usingParkId); //this is going through all of the parks and FINDing the one that matches the id of the one that was clicked, AKA the id of usingParkId

  openDialogPark(parkPop(chosenPark)); //we're calling the function openDialogPark. We're passing the function parkPop into it with a parameter of chosenPark.
});

eventHub.addEventListener('attractionDetailsBtnClicked', evt => {
  const usingAttractionId = evt.detail.attractionId; 
  const attractions = copiedAttractions(); 
  const chosenAttraction = attractions.find(attraction => attraction.id === parseInt(usingAttractionId)); 

  openDialogAttraction(attractionPop(chosenAttraction)); 
});

eventHub.addEventListener('', event => {
  
})


const parkPop= (chosenPark) => {
return `
    <section class="detailsPark">
      <div class="parksDetailsBox">
        <h1>Park Details</h1>
        <div class="ParksDetails__list">
          ${ParkCard(chosenPark)}
        </div>
          <button id="close-details-dialog-park">Close</button>
      </div>
    </section>
  `;
};

const ParkCard = (chosenPark) => {
  // console.log(chosenPark.operatingHours)
  // const operatingHours = chosenPark.operatingHours[0]
  // console.log(operatingHours, "this is op")
  // operatingHours.push(chosenPark.operatingHours)
  // console.log(operatingHours, "operating hours")

  return `
    <div class="park-details__card">
      <div class="park-details__name"> ${chosenPark.fullName} </div>
      <div class="park-details__description"> ${chosenPark.description} </div>
    </div>
  `;
  
};
// These are meant to be used right below the park-details__description
    // <div class="park-details__address"> ${chosenPark.addresses} </div>
    // <div class="park-details__operatingHours"> ${chosenPark.operatingHours.standardHours} </div>
    // <div class="park-details__contacts"> ${chosenPark.contacts.phoneNumbers.phoneNumber} </div>

const attractionPop= (chosenAttraction) => {
      console.log("chosenAttraction", chosenAttraction)
return `
    <section class="detailsAttraction">
      <div class="attractionDetailsBox">
        <h1>Attraction Details</h1>
        <div class="AttractionDetails__list">
          ${AttractionCard(chosenAttraction)}
        </div>
          <button id="close-details-dialog-attraction">Close</button>
      </div>
    </section>
  `;
};

const AttractionCard = (chosenAttraction) => {
  return `
  <div class="attraction-details__card">
  <div class="attraction-details__name"> ${chosenAttraction.name} </div>
  <div class="attraction-details__description"> ${chosenAttraction.description} </div>
  </div>
  `;
  
};



eventHub.addEventListener('click', evt => {
  if (evt.target.id === 'close-details-dialog-park' ||
    evt.target.classList.contains('park-details')) {
    closeDialogPark();
  }
})
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeDialogPark();
  }
});


const closeDialogPark = (taco) => {
  parkPopUp.innerHTML = taco;
  parkPopUp.close()
};

const openDialogPark = (taco) => { //this openDialogPark creates the info that will be shown in the details button. taco is an object.
  parkPopUp.innerHTML = taco;
  parkPopUp.show() //makes the details actually visible on the page.
};


eventHub.addEventListener('click', evt => {
  if (evt.target.id === 'close-details-dialog-attraction' ||
    evt.target.classList.contains('attraction-details')) {
    closeDialogAttraction();
  }
})
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeDialogAttraction();
  }
});


const closeDialogAttraction = (taco) => {
  attractionPopUp.innerHTML = taco;
  attractionPopUp.close()
};

const openDialogAttraction = (taco) => { 
  attractionPopUp.innerHTML = taco;
  attractionPopUp.show()
}

// const AssociateDialog = (associates) => {
//   return `
//     <section class="associate-dialog">
//       <div class="associate-dialog__body">
//         <h1>Known Associates</h1>
//         <div class="associate-dialog__list">
//           ${associates.map(ass => AssociateCard(ass)).join("")}
//         </div>
//           <button id="close-associate-dialog">Close</button>
//       </div>
//     </section>
//   `;
// };

// const AssociateCard = (associate) => {
//   return `
//     <div class="associate-dialog__card">
//       <div class="associate-dialog__name"> ${associate.name} </div>
//       <div class="associate-dialog__alibi"> ${associate.alibi} </div>
//     </div>
//   `;
// }

