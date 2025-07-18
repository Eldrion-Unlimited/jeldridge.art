document.addEventListener('DOMContentLoaded', () => {
  // Scroll to content
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
     function smoothScrollTo(targetY, duration = 2500) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // 0 to 1
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) requestAnimationFrame(scrollStep);
  }

  requestAnimationFrame(scrollStep);
}

enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const targetY = contentSection.offsetTop;
  smoothScrollTo(targetY, 2500); // 👈 2500ms = 2.5s scroll
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
