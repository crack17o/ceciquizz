const themes = [
  {
    name: "Sports",
    icon: "assets/icons/sports.svg",
  },
  {
    name: "Geography",
    icon: "assets/icons/geography.svg",
  },
  {
    name: "History",
    icon: "assets/icons/history.svg",
  },
  {
    name: "Computer Science",
    icon: "assets/icons/computer-science.svg",
  },
];

const themeContainer = document.querySelector(".theme-container");

const renderThemes = () => {
  themes.forEach((theme) => {
    const themeElement = document.createElement("div");
    themeElement.classList.add("theme");

    const icon = document.createElement("img");
    icon.src = theme.icon;
    icon.alt = `${theme.name} icon`;

    const name = document.createElement("span");
    name.textContent = theme.name;

    themeElement.appendChild(icon);
    themeElement.appendChild(name);
    themeContainer.appendChild(themeElement);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderThemes();
});