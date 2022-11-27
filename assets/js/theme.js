

window.onload = () => {
    // Checks if theme is set and changes it, default is light theme
    const theme = localStorage.getItem('theme');
    if (!theme) return;
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark')
        const themeSVG = document.getElementById('theme');
        themeSVG.setAttribute('src', "./assets/images/light.svg")
    }
}

function toggleTheme() {
    let currentTheme = document.documentElement.dataset.theme;
    const themeSVG = document.getElementById('theme');
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    let attribute =
      currentTheme === "dark"
        ? "./assets/images/dark.svg"
        : "./assets/images/light.svg";
      themeSVG.setAttribute('src', attribute); // Changing SVG img source.
  }
  