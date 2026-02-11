const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    if (preloader) {
      preloader.classList.add("is-hidden");
    }
  }, 380);
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        currentObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => observer.observe(element));

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

const scrollLinks = document.querySelectorAll('a.scroll-link[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();

    link.classList.add("link-clicked");
    window.setTimeout(() => link.classList.remove("link-clicked"), 450);

    const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    target.classList.add("section-pulse");
    window.setTimeout(() => target.classList.remove("section-pulse"), 800);
  });
});
