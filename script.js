document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  enterBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    contentSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('load', () => {
  const flicker = document.querySelector('.light-flicker');
  const trident = document.querySelector('.trident');

  setTimeout(() => {
    flicker?.classList.add('flicker-done');
    trident?.classList.add('glow-in');
  }, 3000);
});

// Parallax
(() => {
  const getLayers = () => document.querySelectorAll('.parallax-layer');

  function updateParallax() {
    const scrolled = window.scrollY;
    getLayers().forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
      layer.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }

  // Throttle for performance
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // Initial call
  updateParallax();
})();
