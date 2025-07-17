document.addEventListener('DOMContentLoaded', () => {
  // Scroll trigger to content
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  // Custom smooth scroll function (3 seconds minimum)
  function smoothScrollTo(targetY, duration = 3000) {
    const startY = window.scrollY;
    const distanceY = targetY - startY;
    const startTime = performance.now();

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-in-out for smoothness
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startY + distanceY * ease);
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }
    requestAnimationFrame(animation);
  }

  // Parallax effect setup, but don't activate yet
  const layers = document.querySelectorAll('.parallax-layer');
  let ticking = false;
  const updateParallax = () => {
    const scrolled = window.scrollY;
    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed')) || 0.08; // gentle default
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

  // Only start parallax after Enter is clicked
  let parallaxStarted = false;
  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetY = contentSection.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY, 3000);

      // Fade in parallax layers
      layers.forEach(layer => layer.classList.add('visible'));

      // Start parallax effect
      if (!parallaxStarted) {
        window.addEventListener('scroll', onScroll);
        updateParallax();
        parallaxStarted = true;
      }
    });
  }
});

// Trident glow after flicker (unchanged)
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
