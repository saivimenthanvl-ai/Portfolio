const themeToggleButton = document.getElementById("themeToggle");
const root = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    themeToggleButton.textContent = "🌞";
  } else {
    root.removeAttribute("data-theme");
    themeToggleButton.textContent = "🌙";
  }
}

function toggleTheme() {
  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
}

applyTheme(getPreferredTheme());
themeToggleButton?.addEventListener("click", toggleTheme);

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
