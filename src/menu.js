import { contentDiv } from ".";

export const generateMenuContent = function () {
  const merde = document.createElement("h2");
  merde.textContent = "PISSSSSSE";
  contentDiv.append(merde);
};

// 3D Effect
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const menuEl = card.querySelector(".menu-el");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    menuEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    menuEl.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});
