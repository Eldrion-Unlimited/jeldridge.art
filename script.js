document.addEventListener('DOMContentLoaded', () => {
  // === Scroll trigger to content ===
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // === Parallax effect ===
  const layers = document.querySelectorAll('.parallax-layer');

  if (layers.length > 0) {
    const updateParallax = () => {
      const scrolled = window.scrollY;
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed') || 0);
        layer.style.transform = `translateY(${scrolled * speed}px)`;
      });
      requestAnimationFrame(updateParallax);
    };
    updateParallax();
  }
});

// === Trident glow after flicker ===
window.addEventListener('load', () => {
  const flicker = document.querySelector('.light-flicker');
  const trident = document.querySelector('.trident');

  if (flicker && trident) {
    setTimeout(() => {
      flicker.classList.add('flicker-done'
