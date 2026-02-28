import "./style.css";

const contentDiv = document.getElementById("content");

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
