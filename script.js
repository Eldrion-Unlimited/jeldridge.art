document.addEventListener('DOMContentLoaded', () => {
  // Scroll to content
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Back to top
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1.5) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Trident + Signature glow after flicker
window.addEventListener('load', () => {
  const flicker = document.querySelector('.light-flicker');
  const trident = document.querySelector('.trident');
  const signature = document.querySelector('.signature-img');

  if (flicker && trident) {
    setTimeout(() => {
      flicker.classList.add('flicker-done');
      trident.classList.add('glow-in');
      signature?.classList.add('glow-in');
    }, 3000);
  }
});
