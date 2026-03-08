document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".brand, .menu-links a, .socials a");

  animatedItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(24px)";
    item.style.transition =
      "opacity 0.75s ease, transform 0.75s ease, filter 0.75s ease";
    item.style.filter = "blur(6px)";

    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.filter = "blur(0)";
    }, 120 * index + 150);
  });

  const menuLinks = document.querySelectorAll(".menu-links a");

  menuLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-4px) scale(1.01)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0) scale(1)";
    });
  });

  const brand = document.querySelector(".brand");

  document.addEventListener("mousemove", (event) => {
    if (!brand || window.innerWidth < 900) return;

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    brand.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
  });

  document.addEventListener("mouseleave", () => {
    if (!brand) return;
    brand.style.transform = "translate(0, 0)";
  });
});