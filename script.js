const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const cardNumberInput = document.getElementById("card-num-input");
const form = document.querySelector("form");
const formCVC = document.getElementById("cvc-input");
const orderInput = document.getElementById("order-input");
const holderName = document.querySelector("#holder-name");
const formBtn = document.getElementById("#form-button");
const formBtnSpan = document.getElementById("amount");
const popupCard = document.getElementById("popup-card");
const daySelect = document.getElementById("day");
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");

//////////////////// FORM SUBMIT //////////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hideForm");
  popupCard.classList.remove("hideForm");
  popupCard.classList.add("showCard");
});

//////////////////// CARD NUMBER INPUT //////////////////////
cardNumberInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  value = value.match(/.{1,4}/g)?.join(" ") || "";
  e.target.value = value;
});

//////////////////// CVC INPUT //////////////////////
formCVC.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  e.target.value = value;
});

//////////////////// HOLDER NAME INPUT //////////////////////
holderName.addEventListener("input", (e) => {
  let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
  e.target.value = value;
});

//////////////////// ORDER INPUT //////////////////////
function handleOrderAmount(value) {
  formBtnSpan.textContent = value;
}

const maxLength = 16;
orderInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "").slice(0, maxLength);
  e.target.value = value.match(/.{1,4}/g)?.join(" ") || "";
  handleOrderAmount(value);
});

//////////////////// EXPIRATION DATE //////////////////////
for (let i = 1; i <= 31; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

months.forEach((month) => {
  const option = document.createElement("option");
  option.value = month;
  option.textContent = month;
  monthSelect.appendChild(option);
});

const currentYear = new Date().getFullYear();
const maxExpirationYear = currentYear + 6;
const minExpirationYear = currentYear;

for (let i = maxExpirationYear; i >= minExpirationYear; i--) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  yearSelect.appendChild(option);
}

// const cur = 2030
// for (let i = cur; i >= 2000; i--) {
//   const option = document.createElement("option");
//   option.value = i;
//   option.textContent = i;
//   yearSelect.appendChild(option);
// }
