// VARIABLES

const darkModeToggler = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");
let darkMode = localStorage.getItem("darkMode");

// FUNCTIONS

const toggleDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  toggleDarkMode();
}

// EVENT LISTENERS

darkModeToggler.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    toggleDarkMode();
  } else {
    disableDarkMode();
  }
});
