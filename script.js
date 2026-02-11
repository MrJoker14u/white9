const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    preloader?.classList.add("is-hidden");
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
