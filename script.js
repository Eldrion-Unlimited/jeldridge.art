document.addEventListener('DOMContentLoaded', () => {
  // Scroll trigger to content
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Parallax effect - optimized
  const layers = document.querySelectorAll('.parallax-layer');
  if (layers.length > 0) {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.scrollY;
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
        layer.style.transform = `translateY(${scrolled * speed}px)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // Initialize on load
    updateParallax();
  }
});

// Trident glow after flicker
window.addEventListener('load', () => {
  const flicker = document.querySelector('.light-flicker');
  const trident = document.querySelector('.trident');
  const signature = document.querySelector('.signature-img');

  if (flicker && trident) {
    setTimeout(() => {
      flicker.classList.add('flicker-done');
      trident.classList.add('glow-in');
      if (signature) {
        signature.classList.add('glow-in');
      }
    }, 3000);
  }
});
