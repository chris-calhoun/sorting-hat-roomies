'use strict';

const studentsArray = [];
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const domEvents = () => {
  document.querySelector('#btnShowForm').addEventListener('click', createForm);
  document
    .querySelector('#containerForm')
    .addEventListener('click', displayCards);
};

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createForm = () => {
  const form = `<h3>Enter First Year's Name</h3>
                    <div class="formBody">
                        <form class="form-inline" id="sortingForm">
                            <div class="form-group mb-2">
                                <label for="studentName" class="mr-2 text">Student : </label>
                                <input type="text" class="form-control" id="inputName" placeholder="Hermione Granger">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2" id="btnShowCards">Reveal my house!</button>
                        </form>
                    </div>`;

  renderToDom('containerForm', form);
};

// return a random house when called
const houseSelection = () => {
  const randomNum = Math.floor(Math.random() * houseNames.length);
  const house = houseNames[randomNum];
  return house;
};

// sort student into house
const displayCards = e => {
  const target = e.target.id;
  if (target === 'btnShowCards') {
    const name = document.getElementById('inputName').value;
    if (name.length === 0) {
      errorMessage();
    } else {
      studentsArray.push({ studentName: name, house: houseSelection() });
      document.querySelector('#sortingForm').reset();
      cardBuilder();
    }
  }
};

// create student card when called
const cardBuilder = () => {
  let domString = '';
  for (let i = 0; i < studentsArray.length; i++) {
    domString += `<div class="card m-4" id="${i}" style="width: 18rem;">`;
    domString += `<div class="card-body text-center">`;
    domString += `<h5 class="card-title-${i}">${studentsArray[i].studentName}</h5>`;
    domString += `<h6 id = "card-house" class="card-subtitle mb-2 text-muted">${studentsArray[i].house}</h6>`;
    domString += `<button type="button" class="btn btn-danger" id=${i}>Expel</button>`;
    domString += `</div></div>`;
  }
  renderToDom('containerCards', domString);
};

//error placeholder
const displayErrorMessage = () => {
  const errorMessage = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>Merlin's beard!</strong> How am I to sort ya without a name?!
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`
  renderToDom('containerErrorMessage', errorMessage);
  }

domEvents();
