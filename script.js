const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));

const magneticButtons = document.querySelectorAll('.btn-primary, .btn-outline');

magneticButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = '';
  });
});
