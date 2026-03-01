import { contentDiv } from ".";

export const generateAboutContent = function () {
  const openingHoursH2 = document.createElement("h2");
  openingHoursH2.textContent = "Opening Hours";
  contentDiv.append(openingHoursH2);

  const openingHours = [
    { day: "Monday", open: "9AM", close: "11PM" },
    { day: "Tuesday", open: "9AM", close: "11PM" },
    { day: "Wednesday", open: "9AM", close: "3PM" },
    { day: "Thursday", open: "9AM", close: "11PM" },
    { day: "Friday", open: "9AM", close: "11PM" },
    { day: "Saturday", open: "9AM", close: "2AM" },
    { day: "Sunday", open: "9AM", close: "3PM" },
  ];

  // Opening Hours table generation
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const todayIndex = new Date().getDay();

  openingHours.forEach(({ day, open, close }, index) => {
    const tr = document.createElement("tr");

    const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

    if (index === adjustedIndex) {
      tr.classList.add("today");
    }
    [day, open, close].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  contentDiv.appendChild(table);

  // iframe generation
  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6410.751247085135!2d3.877908743185585!3d43.611190185864345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1772355165368!5m2!1sfr!2sfr";

  iframe.style.border = "0";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";

  contentDiv.appendChild(iframe);
};
