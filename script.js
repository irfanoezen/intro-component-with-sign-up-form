"use strict";

function showErrorMessage(input) {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  if (input.validity.valueMissing) {
    // If value empty
    // Check which type of input
    switch (input.id) {
      case "firstName":
        errorMessage.textContent = "First Name cannot be empty";
        break;
      case "lastName":
        errorMessage.textContent = "Last Name cannot be empty";
        break;
      case "email":
        errorMessage.textContent = "Email cannot be empty";
        break;
      case "password":
        errorMessage.textContent = "Password cannot be empty";
        break;
    }
  } else if (input.validity.typeMismatch || input.validity.patternMismatch) {
    // If it's not an email address,
    // Check which type of input
    switch (input.id) {
      case "firstName":
        errorMessage.textContent =
          "Must start with one uppercase letter, 4-8 characters, no digits";
        break;
      case "lastName":
        errorMessage.textContent =
          "Must start with one uppercase letter, 4-8 characters, no digits";
        break;
      case "email":
        errorMessage.textContent = "Looks like this is not an email";
        break;
      case "password":
        errorMessage.textContent = "";
        break;
    }
  }

  if (input.parentElement.nextElementSibling?.tagName === "P") {
    input.parentElement.nextElementSibling.remove();
  }
  input.parentElement.after(errorMessage);
}

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const inputFields = [firstName, lastName, email, password];

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  inputFields.forEach((inputField) => {
    // if the input field is invalid
    if (!inputField.validity.valid) {
      // display an appropriate error message
      showErrorMessage(inputField);
      inputField.parentElement.classList.add("input-user-invalid")
      // prevent form submission
      event.preventDefault();
    } else if (inputField.parentElement.nextElementSibling?.tagName === "P") {
      inputField.parentElement.nextElementSibling.remove();
      inputField.parentElement.classList.remove("input-user-invalid")
    }
  });
});
