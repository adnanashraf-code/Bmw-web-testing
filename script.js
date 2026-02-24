document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth Reveal using Intersection Observer
  const revealElements = document.querySelectorAll(".smooth-reveal");
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Car Models Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      filterItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block";
          // Re-trigger reveal animation
          setTimeout(() => item.classList.add("visible"), 10);
        } else {
          if (item.classList.contains(filterValue)) {
            item.style.display = "block";
            setTimeout(() => item.classList.add("visible"), 10);
          } else {
            item.style.display = "none";
            item.classList.remove("visible");
          }
        }
      });
    });
  });

  // Mobile Menu Toggle Placeholder
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    console.log(
      "Mobile menu clicked! In a full build, this would open a sleek side drawer.",
    );
    alert("Mobile navigation drawer would open here.");
  });

  // Color Swatch Interaction (Mockup Configurator)
  const swatches = document.querySelectorAll(".color-swatch");
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      // Unselect all
      swatches.forEach((s) => (s.style.borderColor = "transparent"));
      // Select clicked
      e.target.style.borderColor = "#fff";
      // Placeholder for changing car color
      console.log("Selected color:", e.target.title);
    });
  });
});
