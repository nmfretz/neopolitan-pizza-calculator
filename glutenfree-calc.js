// input elements
const numPizzaInputGF = document.querySelector("[data-num-pizzas-gf]");
const pizzaWeightInputGF = document.querySelector("[data-weight-gf]");
const waterContentInputGF = document.querySelector("[data-water-content-gf]");
const oliveoilPercentInputGF = document.querySelector("[data-oliveoil-percent-gf]");
const yeastPercentInputGF = document.querySelector("[data-yeast-percent-gf]");
const saltPercentInputGF = document.querySelector("[data-salt-percent-gf]");

// output elements
const flourResultElementGF = document.querySelector("[data-flour-calc-gf]");
const waterResultElementGF = document.querySelector("[data-water-calc-gf]");
const oliveoilResultElementGF = document.querySelector("[data-oliveoil-calc-gf]");
const yeastResultElementGF = document.querySelector("[data-yeast-calc-gf]");
const saltResultElementGF = document.querySelector("[data-salt-calc-gf]");

export function setupGlutenfreeCalculator() {
  calculateGlutenfree();

  const calculateButtonGF = document.querySelector("[data-calculate-btn-gf]");
  calculateButtonGF.addEventListener("click", (e) => {
    e.preventDefault();
    calculateGlutenfree();
  });

  const resetDefaultsButtonGF = document.querySelector("[data-reset-btn-gf]");
  resetDefaultsButtonGF.addEventListener("click", (e) => {
    e.preventDefault();
    resetDefaultGlutenfree();
    calculateGlutenfree();
  });
}

export function calculateGlutenfree() {
  const numPizzas = numPizzaInputGF.value;
  const weightPerPizza = pizzaWeightInputGF.value;
  const waterContent = waterContentInputGF.value;
  const percentOliveoil = oliveoilPercentInputGF.value;
  const percentYeast = parseFloat(yeastPercentInputGF.value);
  const percentSalt = parseFloat(saltPercentInputGF.value);

  const flour =
    (numPizzas * weightPerPizza) /
    (1 + waterContent / 100 + percentYeast / 100 + percentSalt / 100 + percentOliveoil / 100);
  const water = (flour * waterContent) / 100;
  const oliveoil = (percentOliveoil / 100) * flour;
  const salt = (percentSalt / 100) * flour;
  const yeast = (percentYeast / 100) * flour;

  flourResultElementGF.innerText = `${flour.toFixed(1)} g`;
  waterResultElementGF.innerText = `${water.toFixed(1)} g`;
  oliveoilResultElementGF.innerText = `${oliveoil.toFixed(1)} g`;
  yeastResultElementGF.innerText = `${yeast.toFixed(1)} g`;
  saltResultElementGF.innerText = `${salt.toFixed(1)} g`;
}

function resetDefaultGlutenfree() {
  numPizzaInputGF.value = 1;
  pizzaWeightInputGF.value = 250;
  waterContentInputGF.value = 80;
  oliveoilPercentInputGF.value = 5;
  yeastPercentInputGF.value = 0.1;
  saltPercentInputGF.value = 3;
}
