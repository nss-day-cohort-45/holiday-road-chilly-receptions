import { copiedParks, getParks } from "../parks/ParkProvider.js" 

const eventHub = document.querySelector('.container');
const parkPopUp = document.querySelector('.detailParkDialog')

/*

*/
eventHub.addEventListener('detailsBtnClicked', evt => {
  const usingParkId = evt.detail.parkId; //parkId relates to the split off from the cray ID that we just received from our eventHub (from Parks component)
  const parks = copiedParks(); //making it available for use to access all of the parks, so it is an array of the parks
  const chosenPark = parks.find(park => park.id === usingParkId); //this is going through all of the parks and FINDing the one that matches the id of the one that was clicked, AKA the id of usingParkId

  openDialog(parkPop(chosenPark)); //we're calling the function openDialog. We're passing the function parkPop into it with a parameter of chosenPark.
});


const parkPop= (chosenPark) => {
return `
    <section class="detailsPark">
      <div class="parksDetailsBox">
        <h1>Park Details</h1>
        <div class="ParksDetails__list">
          ${ParkCard(chosenPark)}
        </div>
          <button id="close-details-dialog">Close</button>
      </div>
    </section>
  `;
};

const ParkCard = (chosenPark) => {
  console.log(chosenPark.operatingHours)
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


eventHub.addEventListener('click', evt => {
  if (evt.target.id === 'close-details-dialog' ||
    evt.target.classList.contains('park-details')) {
    closeDialog();
  }
})
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    closeDialog();
  }
});


const closeDialog = (taco) => {
  parkPopUp.innerHTML = taco;
  parkPopUp.close()
};

const openDialog = (taco) => { //this openDialog creates the info that will be shown in the details button. taco is an object.
  parkPopUp.innerHTML = taco;
  parkPopUp.show() //makes the details actually visible on the page.
};


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
// };
