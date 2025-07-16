// Smooth scroll to next section
document.getElementById('enterBtn').addEventListener('click', () => {
  const contentSection = document.querySelector('.content');
  contentSection.scrollIntoView({ behavior: 'smooth' });
});

// Optional: re-trigger flicker on reload (force animation replay)
window.addEventListener('load', () => {
  const flicker = document.querySelector('.flicker-light');
  flicker.style.animation = 'none';
  void flicker.offsetWidth; // trigger reflow
  flicker.style.animation = null;
});

