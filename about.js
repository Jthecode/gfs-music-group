document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".about-hero");
  const cards = document.querySelectorAll(".about-card, .story-panel");
  const navLinks = document.querySelectorAll(".topnav a");
  const brandmark = document.querySelector(".brandmark");

  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(24px)";
    hero.style.filter = "blur(6px)";
    hero.style.transition =
      "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";

    setTimeout(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
      hero.style.filter = "blur(0)";
    }, 120);
  }

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(34px)";
    card.style.filter = "blur(8px)";
    card.style.transition =
      "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.filter = "blur(0)";
    }, 220 + index * 140);
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-1px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0)";
    });
  });

  document.addEventListener("mousemove", (event) => {
    if (!brandmark || window.innerWidth < 900) return;

    const moveX = (event.clientX / window.innerWidth - 0.5) * 8;
    const moveY = (event.clientY / window.innerHeight - 0.5) * 8;

    brandmark.style.transform = `translate(${moveX * 0.35}px, ${moveY * 0.35}px)`;
  });

  document.addEventListener("mouseleave", () => {
    if (!brandmark) return;
    brandmark.style.transform = "translate(0, 0)";
  });
});