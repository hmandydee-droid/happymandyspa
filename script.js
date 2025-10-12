let currentLang = "jp";

function changeLanguage(lang) {
  currentLang = lang;
  // Translate elements that use the translations map (data-key)
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate elements that have language-specific attributes (e.g. data-en, data-jp)
  // This covers the welcome modal which uses data-en/data-jp attributes.
  document.querySelectorAll("[data-en], [data-jp]").forEach((el) => {
    const localized = el.getAttribute(`data-${lang}`);
    if (localized !== null) {
      el.textContent = localized;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langBtn").addEventListener("click", () => {
    const newLang = currentLang === "en" ? "jp" : "en";
    changeLanguage(newLang);
  });
  // Initialize page language on load
  changeLanguage(currentLang);
});
// Mobile hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
const modal = document.getElementById("welcomeModal");
const closeBtn = document.querySelector(".modal .close");
const modalCloseBtn = document.getElementById("modalCloseBtn");

// Show modal after 1 second
window.addEventListener("load", () => {
  setTimeout(() => {
    modal.style.display = "block";
  }, 1000);
});

// Close on X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on button
modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close on outside click
window.addEventListener("click", (e) => {
  modal.style.display = "none";
});
