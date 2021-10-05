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

calculateIngredients();

const glutenTab = document.querySelector("[data-gluten-tab]");
const glutenfreeTab = document.querySelector("[data-glutenfree-tab]");

glutenTab.addEventListener("click", (e) => {
  if (e.target.parentElement.matches(".is-active")) return;
  changeTab();
});

glutenfreeTab.addEventListener("click", (e) => {
  if (e.target.parentElement.matches(".is-active")) return;
  changeTab();
});

const calculateButton = document.querySelector("[data-calculate-btn]");
calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculateIngredients();
});

const resetDefaultsButton = document.querySelector("[data-reset-btn]");
resetDefaultsButton.addEventListener("click", (e) => {
  e.preventDefault();
  resetDefaultValues();
  calculateIngredients();
});

function changeTab() {
  const glutenSection = document.querySelector("[data-gluten]");
  const glutenfreeSection = document.querySelector("[data-glutenfree]");
  glutenSection.classList.toggle("is-hidden");
  glutenfreeSection.classList.toggle("is-hidden");
  glutenTab.parentElement.classList.toggle("is-active");
  glutenfreeTab.parentElement.classList.toggle("is-active");
}

function calculateIngredients() {
  const numPizzas = numPizzaInput.value;
  const weightPerPizza = pizzaWeightInput.value;
  const waterContent = waterContentInput.value;
  const percentYeast = parseFloat(yeastPercentInput.value);
  const percentSalt = parseFloat(saltPercentInput.value);

  const flour = (numPizzas * weightPerPizza) / (1 + waterContent / 100 + percentYeast / 100 + percentSalt / 100);
  const water = (flour * waterContent) / 100;
  const salt = (percentSalt / 100) * flour;
  const yeast = (percentYeast / 100) * flour;

  flourResultElement.innerText = `${flour.toFixed(1)} g`;
  waterResultElement.innerText = `${water.toFixed(1)} g`;
  yeastResultElement.innerText = `${yeast.toFixed(1)} g`;
  saltResultElement.innerText = `${salt.toFixed(1)} g`;
}

function resetDefaultValues() {
  numPizzaInput.value = 1;
  pizzaWeightInput.value = 250;
  waterContentInput.value = 57;
  yeastPercentInput.value = 0.2;
  saltPercentInput.value = 3;
}
