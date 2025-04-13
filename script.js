/*
=====================================================
 Project       : Special Days
 Description   : Handles mobile menu toggle and validates the form

 Author        : Govarthanahari N
 Version       : 1.0
 Date          : 10/03/24
=====================================================
*/

//Navigation Elements
const ham = document.getElementById("ham");
const cross = document.getElementById("cross");
const content = document.getElementById("content");

//Navigation Links
const home = document.getElementById("home1");
const news = document.getElementById("news1");
const shop = document.getElementById("shop1");
const care = document.getElementById("care1");
const contact = document.getElementById("contact1");

//Menu move and close functionalities
console.log(ham);
ham.addEventListener("click", () => {
  content.classList.remove("slide-out-right");
  content.classList.add("slide-in-right");
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
cross.addEventListener("click", () => {
  content.classList.remove("slide-in-right");
  content.classList.add("slide-out-right");
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
home.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
news.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
contact.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
care.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});
shop.addEventListener("click", () => {
  ham.classList.toggle("hidden");
  cross.classList.toggle("hidden");
  content.classList.toggle("hidden");
});

//Form Validation
function validateForm(name, email, phone) {
  let email_regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  if (email === "") {
    e_e.textContent = "*Required";
    e_e.style.color = "#83C94A";
  } else {
    e_e.textContent = "";
  }
  if (phone === "") {
    p_e.textContent = "*Required";
    p_e.style.color = "#83C94A";
  } else {
    p_e.textContent = "";
  }
  if (name === "") {
    n_e.textContent = "*Required";
    n_e.style.color = "#83C94A";
  } else {
    n_e.textContent = "";
  }
}

const name = document.getElementById("name-form");
const email = document.getElementById("email-form");
const phone = document.getElementById("phone-form");
const form = document.getElementById("form");
const p_e = document.getElementById("p_e");
const e_e = document.getElementById("e_e");
const n_e = document.getElementById("n_e");

//Form Submit Handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(name.value, email.value, phone.value);

  validateForm(name.value, email.value, phone.value);

  saveForm(name.value, email.value, phone.value);
});

