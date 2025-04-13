window.addEventListener("DOMContentLoaded", () => {
  const animationGroups = document.querySelectorAll(".rad-animation-group");
  const animationElements = document.querySelectorAll(
    ".rad-fade-down, .rad-fade-in, .rad-fade-in-long"
  );

  // Intersection Observer for smooth reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rad-animate");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  // Observe all animation elements
  animationElements.forEach((element) => {
    element.classList.add("rad-waiting");
    observer.observe(element);
  });

  // Add parallax effect to showcase background
  const showcaseBg = document.querySelector(".rad-showcase__bg img");
  if (showcaseBg) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      showcaseBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
    });
  }
});
