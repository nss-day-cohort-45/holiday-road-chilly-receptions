import { copiedParks, getParks } from "../parks/ParkProvider.js"

const eventHub = document.querySelector('.container');
const parkPopUp = document.querySelector('.detailParkDialog')

// try it criminals buttons way
// We think that this is creating the buttonclicked event
eventHub.addEventListener('detailsBtnClicked', evt => {
  const parkId = evt.detail.parkId;
  // What does  .parkId  relate to?
  const parks = copiedParks();
  const chosenPark = parks.find(park => park.id === parkId);

  openDialog(parkPop(chosenPark));
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
  return `
    <div class="park-details__card">
      <div class="park-details__name"> ${chosenPark.fullName} </div>
      <div class="park-details__description"> ${chosenPark.description} </div>
      <div class="park-details__address"> ${chosenPark.addresses} </div>
      <div class="park-details__operatingHours"> ${chosenPark.operatingHours} </div>
      <div class="park-details__contacts"> ${chosenPark.contacts.phoneNumbers.phoneNumber} </div>


    </div>
  `;
};



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


const closeDialog = () => {
  const container = document.querySelector('.detailParkButton');
  parkPopUp.innerHTML = "";
};

const openDialog = (taco) => {
  parkPopUp.innerHTML = taco;
  parkPopUp.show() 
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
