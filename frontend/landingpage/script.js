document.addEventListener("DOMContentLoaded", function () {
  const menuToggles = document.querySelectorAll("#menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  menuToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      toggleMenu();
    });
  });

  menuClose.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Close mobile menu on window resize if it's open
  window.addEventListener("resize", function () {
    if (window.innerWidth > 991 && mobileMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});

const elements = [
  document.querySelector(".animated-title-easy"),
  document.querySelector(".animated-title-powerful"),
  document.querySelector(".animated-title-beautiful"),
];

const descriptions = [
  `<span class="text-muted">We run </span>
   <span class="highlight">Billions</span>
   <span class="text-muted">
     of computations<br />every second, to provide<br
   /></span>
   <span class="highlight">lightning fast Backtesting,</span>
   <span class="text-muted"><br />real time alerts and scanning.</span>`,

  `<span class="text-muted">First of a kind innovation that lets you<br />easily</span>
   <span class="highlight">Create Strategies</span>
   <span class="text-muted"> and<br /></span>
   <span class="highlight">deploy to markets,</span>
   <span class="text-muted">as easy as plotting charts.</span>`,

  `<span class="highlight"><br/>Beautiful UI</span>
   <span class="text-muted"> for the modern trader,<br/>with access on all platforms,<br/>to trade</span>
   <span class="highlight"> on the go</span>`,
];

const images = [
  "assets/thumbsup.svg", // Image for "It's easy"
  "assets/diamond.svg", // Image for "It's powerful"
  "assets/cointree.svg", // Image for "It's beautiful"
];

const descriptionElement = document.querySelector(".animated-description");
const imageElement = document.querySelector(".animated-icon");

let currentIndex = 0;

function animateText() {
  // Reset all text colors
  elements.forEach((el) => el.classList.remove("active"));

  // Highlight the current text
  elements[currentIndex].classList.add("active");

  // Change the description
  descriptionElement.innerHTML = descriptions[currentIndex];

  // Change the image
  imageElement.src = images[currentIndex];

  // Move to the next element
  currentIndex = (currentIndex + 1) % elements.length;
}

// Initial activation
animateText();

// Cycle every 3 seconds
setInterval(animateText, 3000);



// Drag Scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  let isDown = false;
  let startX;
  let scrollLeft;

  // Scroll using buttons
  function scrollLeftFunc() {
      scrollContainer.scrollBy({ left: -350, behavior: "smooth" });
  }

  function scrollRightFunc() {
      scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
  }

  document.querySelector(".scroll-btn.left").addEventListener("click", scrollLeftFunc);
  document.querySelector(".scroll-btn.right").addEventListener("click", scrollRightFunc);

  // Drag Scrolling for Mouse
  scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling when dragging
  });

  scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
  });

  scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = startX - x; // Direct movement mapping
      scrollContainer.scrollLeft = scrollLeft + walk;
  });

  // Touch events for mobile scrolling
  let touchStartX = 0;

  scrollContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling on touch
  });

  scrollContainer.addEventListener("touchmove", (e) => {
      let touchEndX = e.touches[0].clientX;
      let moveX = touchStartX - touchEndX;
      scrollContainer.scrollLeft += moveX; // Move exactly as per touch
      touchStartX = touchEndX;
  });

  // Enable smooth scrolling back after interaction
  scrollContainer.addEventListener("mouseup", () => {
      scrollContainer.style.scrollBehavior = "smooth";
  });

  scrollContainer.addEventListener("touchend", () => {
      scrollContainer.style.scrollBehavior = "smooth";
  });
});

// Auto Scroll to the bottom of the page
window.onload = function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
