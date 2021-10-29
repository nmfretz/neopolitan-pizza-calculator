import { setupGlutenCalculator } from "./gluten-calc.js";
import { setupGlutenfreeCalculator } from "./glutenfree-calc.js";

setupGlutenCalculator();
setupGlutenfreeCalculator();

const burgerIcon = document.querySelector("[data-burger-icon]");
const navbarMenu = document.querySelector("[data-nav-links]");
burgerIcon.addEventListener("click", (e) => {
  navbarMenu.classList.toggle("is-active");
});

const glutenTab = document.querySelector("[data-gluten-tab]");
glutenTab.addEventListener("click", (e) => {
  if (e.target.parentElement.matches(".is-active")) return;
  goToOtherCalculator();
});

const glutenfreeTab = document.querySelector("[data-glutenfree-tab]");
glutenfreeTab.addEventListener("click", (e) => {
  if (e.target.parentElement.matches(".is-active")) return;
  goToOtherCalculator();
});

function goToOtherCalculator() {
  const glutenSection = document.querySelector("[data-gluten]");
  const glutenfreeSection = document.querySelector("[data-glutenfree]");
  glutenSection.classList.toggle("is-hidden");
  glutenfreeSection.classList.toggle("is-hidden");
  glutenTab.parentElement.classList.toggle("is-active");
  glutenfreeTab.parentElement.classList.toggle("is-active");
}
