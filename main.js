'use strict';

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const createForm = () => {
    const form =    `<h3>Enter First Year's Name</h3>
                    <div class="formBody">
                        <form class="form-inline" id="sortingForm">
                            <div class="form-group mb-2">
                                <label for="studentName" class="mr-2 text">Student : </label>
                                <input type="text" class="form-control" id="inputName" placeholder="Hermione Granger">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2" id="btnShowCards">Reveal my house!</button>
                        </form>
                    </>`;

renderToDom("containerForm", form);
};

const displayErrorMessage = () => {
  const errorMessage = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                          <strong>Merlin's beard!</strong> How am I to sort ya without a name?!
                          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                          </button>
                        </div>`;
  renderToDom('containerErrorMessage', errorMessage);
  }

const domEvents = () => {
document.querySelector('#btnShowForm').addEventListener('click', createForm);
document.querySelector('#btnShowForm').addEventListener('click', displayErrorMessage);
}

domEvents();
