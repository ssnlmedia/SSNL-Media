const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const links = document.querySelectorAll(".nav a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

const packageButtons = document.querySelectorAll(".package-btn");
const selectedPackage = document.getElementById("selectedPackage");
const packageCards = document.querySelectorAll(".package-card");

packageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const packageName = button.getAttribute("data-package");

    selectedPackage.value = packageName;

    packageCards.forEach(function (card) {
      card.classList.remove("selected");
    });

    button.parentElement.classList.add("selected");

    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
});