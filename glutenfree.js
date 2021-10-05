// input elements
const numPizzaInput = document.querySelector("[data-num-pizzas-gf]");
const pizzaWeightInput = document.querySelector("[data-weight-gf]");
const waterContentInput = document.querySelector("[data-water-content-gf]");
const oliveoilPercentInput = document.querySelector("[data-oliveoil-percent-gf]");
const yeastPercentInput = document.querySelector("[data-yeast-percent-gf]");
const saltPercentInput = document.querySelector("[data-salt-percent-gf]");

// output elements
const flourResultElement = document.querySelector("[data-flour-calc-gf]");
const waterResultElement = document.querySelector("[data-water-calc-gf]");
const oliveoilResultElement = document.querySelector("[data-oliveoil-calc-gf]");
const yeastResultElement = document.querySelector("[data-yeast-calc-gf]");
const saltResultElement = document.querySelector("[data-salt-calc-gf]");

calculateIngredients();

const calculateButton = document.querySelector("[data-calculate-btn-gf]");
calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculateIngredients();
});

const resetDefaultsButton = document.querySelector("[data-reset-btn-gf]");
resetDefaultsButton.addEventListener("click", (e) => {
  e.preventDefault();
  resetDefaultValues();
  calculateIngredients();
});

function calculateIngredients() {
  const numPizzas = numPizzaInput.value;
  const weightPerPizza = pizzaWeightInput.value;
  const waterContent = waterContentInput.value;
  const percentOliveoil = oliveoilPercentInput.value;
  const percentYeast = parseFloat(yeastPercentInput.value);
  const percentSalt = parseFloat(saltPercentInput.value);

  const flour =
    (numPizzas * weightPerPizza) /
    (1 + waterContent / 100 + percentYeast / 100 + percentSalt / 100 + percentOliveoil / 100);
  const water = (flour * waterContent) / 100;
  const oliveoil = (percentOliveoil / 100) * flour;
  const salt = (percentSalt / 100) * flour;
  const yeast = (percentYeast / 100) * flour;

  flourResultElement.innerText = `${flour.toFixed(1)} g`;
  waterResultElement.innerText = `${water.toFixed(1)} g`;
  oliveoilResultElement.innerText = `${oliveoil.toFixed(1)} g`;
  yeastResultElement.innerText = `${yeast.toFixed(1)} g`;
  saltResultElement.innerText = `${salt.toFixed(1)} g`;
}

function resetDefaultValues() {
  numPizzaInput.value = 1;
  pizzaWeightInput.value = 250;
  waterContentInput.value = 80;
  oliveoilPercentInput.value = 5;
  yeastPercentInput.value = 0.1;
  saltPercentInput.value = 3;
}
