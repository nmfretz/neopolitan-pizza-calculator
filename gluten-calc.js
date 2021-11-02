// input elements
const numPizzaInput = document.querySelector("[data-num-pizzas]");
const pizzaWeightInput = document.querySelector("[data-weight]");
const waterContentInput = document.querySelector("[data-water-content]");
const yeastPercentInput = document.querySelector("[data-yeast-percent]");
const saltPercentInput = document.querySelector("[data-salt-percent]");

// output elements
const flourResultElement = document.querySelector("[data-flour-calc]");
const waterResultElement = document.querySelector("[data-water-calc]");
const yeastResultElement = document.querySelector("[data-yeast-calc]");
const saltResultElement = document.querySelector("[data-salt-calc]");

export function setupGlutenCalculator() {
  calculateGluten();

  const calculateButton = document.querySelector("[data-calculate-btn]");
  calculateButton.addEventListener("click", (e) => {
    e.preventDefault();
    calculateGluten();
  });

  const resetDefaultsButton = document.querySelector("[data-reset-btn]");
  resetDefaultsButton.addEventListener("click", (e) => {
    e.preventDefault();
    resetDefaultValuesGluten();
    calculateGluten();
  });
}

let isFormValid = false;

function calculateGluten() {
  const numPizzas = numPizzaInput.value;
  const weightPerPizza = pizzaWeightInput.value;
  const waterContent = waterContentInput.value;
  const percentYeast = yeastPercentInput.value;
  const percentSalt = saltPercentInput.value;

  const flour = (numPizzas * weightPerPizza) / (1 + waterContent / 100 + percentYeast / 100 + percentSalt / 100);
  const water = (flour * waterContent) / 100;
  const salt = (percentSalt / 100) * flour;
  const yeast = (percentYeast / 100) * flour;

  validateFormInputGluten(numPizzas, weightPerPizza, waterContent, percentYeast, percentSalt);

  if (isFormValid) {
    flourResultElement.innerText = `${flour.toFixed(1)} g`;
    waterResultElement.innerText = `${water.toFixed(1)} g`;
    yeastResultElement.innerText = `${yeast.toFixed(1)} g`;
    saltResultElement.innerText = `${salt.toFixed(1)} g`;
  }
}

function resetDefaultValuesGluten() {
  numPizzaInput.value = 1;
  pizzaWeightInput.value = 250;
  waterContentInput.value = 57;
  yeastPercentInput.value = 0.2;
  saltPercentInput.value = 3;
}

function validateFormInputGluten(numPizzas, weightPerPizza, waterContent, percentYeast, percentSalt) {
  clearErrorMessageGluten();

  isFormValid = true;

  if (numPizzas === "" || weightPerPizza === "" || waterContent === "" || percentYeast === "" || percentSalt === "") {
    renderErrorMessageGluten();
    isFormValid = false;
  }
}

const messageElement = document.querySelector("[data-error-message-gluten]");
const glutenSection = document.querySelector("[data-gluten]");

function renderErrorMessageGluten() {
  messageElement.classList.remove("is-hidden");

  const allInputs = [...glutenSection.querySelectorAll("input")];
  allInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("is-danger");
    }
  });
}

function clearErrorMessageGluten() {
  messageElement.classList.add("is-hidden");

  const allInputs = [...glutenSection.querySelectorAll("input")];
  allInputs.forEach((input) => {
    input.classList.remove("is-danger");
  });
}
