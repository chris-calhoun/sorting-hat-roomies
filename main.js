'use strict';

console.log('test');

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  };

const createForm = () => {
    const form =    `<div class="wholeForm" style="border: 2px solid #345455;  width: 55%; margin: auto; padding: 25px 0px 20px 0px; border-radius: 10px; color: #345455;">
                        <h3 class="text-center mb-3">Enter First Year's Name</h3>
                        <div class="formBody d-flex justify-content-center">
                            <form class="form-inline" id="sortingForm">
                                <div class="form-group mb-2 p-2">
                                    <label for="studentName" class="mr-2 text" style="color: #345455;">Student : </label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Hermione Granger">
                                </div>
                                <button type="submit" class="btn mb-2" id="btnShowCards" style="background-color: #F2C94C;">Reveal my house!</button>
                            </form>
                        </div>
                    </div>;`

renderToDom("containerForm", form);
};

const domEvents = () => {
document.querySelector('#btnShowForm').addEventListener('click', createForm);
}

domEvents();
