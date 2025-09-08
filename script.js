document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("active"); // ヘッダーが見えなくなったら
      } else {
        nav.classList.remove("active"); // ヘッダーがある間は通常
      }
    });
  }, { threshold: 0 });

  observer.observe(header);
});