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
    if (
      window.innerWidth > 991 &&
      mobileMenu.classList.contains("active")
    ) {
      toggleMenu();
    }
  });
});