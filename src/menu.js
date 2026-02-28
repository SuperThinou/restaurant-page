import { contentDiv } from "./index";
import boeufWagyu from "./img/boeuf-wagyu.jpg";
import tomahawk from "./img/tomahawk.jpg";

export const generateMenuContent = function () {
  cards.forEach((data) => {
    const card = createCard(data);
    contentDiv.appendChild(card);
  });
};

function createCard({ imgSrc, title, description }) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("menu-el");

  const h2 = document.createElement("h2");
  h2.textContent = title;
  h2.classList.add("menu-title");

  const p = document.createElement("p");
  p.textContent = description;
  p.classList.add("menu-text");

  card.append(img, h2, p);

  apply3DEffect(img);

  return card;
}

const cards = [
  {
    imgSrc: boeufWagyu,
    title: "Boeuf Wagyu",
    description: "Rangers Valley, Australia",
  },
  {
    imgSrc: tomahawk,
    title: "Tomahawk",
    description: "± 1.4kg for 2/3, 490€",
  },
];

// 3D Effect
function apply3DEffect(card) {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}
