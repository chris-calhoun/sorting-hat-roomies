'use strict';

console.log('test');

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
                    </div>`;

renderToDom("containerForm", form);
};

createForm();