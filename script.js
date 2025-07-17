document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  enterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('load', () => {
  const flicker = document.querySelector('.light-flicker');
  const trident = document.querySelector('.trident');

  setTimeout(() => {
    flicker.classList.add('flicker-done');
    trident.classList.add('glow-in');
  }, 3000);
});

// Parallax
const layers = document.querySelectorAll('.parallax-layer');
function updateParallax() {
  const scrolled = window.scrollY;
  layers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    const movement = scrolled * speed;
    layer.style.transform = `translateY(${movement}px)`;
  });
  requestAnimationFrame(updateParallax);
}
requestAnimationFrame(updateParallax);

