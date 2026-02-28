import "./style.css";
import { generateMenuContent } from "./menu";
import { generateAboutContent } from "./about";

const buttons = document.querySelectorAll("button");
export const contentDiv = document.getElementById("content");

const generateIndexContent = function () {
  // Hero
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("hero");

  // Presentation
  const presentationDiv = document.createElement("div");
  presentationDiv.classList.add("presentation");
  const pureEleganceH2 = document.createElement("h2");
  pureEleganceH2.textContent = "pure elegance";
  presentationDiv.append(pureEleganceH2);

  // Testimony
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony");
  const quoteText = document.createElement("blockquote");
  quoteText.textContent = "A better restaurant? Not in this world.";
  const citeText = document.createElement("cite");
  citeText.textContent = "Joe Biden";
  testimonyDiv.append(quoteText, citeText);

  contentDiv.append(heroDiv, presentationDiv, testimonyDiv);
};

const clearContent = function () {
  contentDiv.innerHTML = "";
};

generateIndexContent();

const pages = {
  home: generateIndexContent,
  menu: generateMenuContent,
  about: generateAboutContent,
};
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const page = e.currentTarget.dataset.page;
    clearContent();
    pages[page]();
  });
});
