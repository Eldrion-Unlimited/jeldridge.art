document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');
  const backToTop = document.getElementById('backToTop');
  const hamburger = document.getElementById('hamburgerBtn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  /**
   * Smooth scroll function using requestAnimationFrame
   */
  function smoothScrollTo(targetY, duration = 1500) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Smooth cubic ease
      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
  }

  /**
   * Scroll to content on Enter button click
   */
  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo(contentSection.offsetTop, 1500);
    });
  }

  /**
   * Show/Hide back-to-top button
   */
  if (backToTop) {
    window.addEventListener('scroll', () => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        if (window.scrollY > window.innerHeight * 1.5) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Delay showing hamburger to avoid showing during scroll
      if (hamburger) {
        hamburger.style.display = 'none';
        setTimeout(() => {
          hamburger.style.display = 'block';
        }, 800);
      }
    });
  }

  /**
   * Gallery mouse/touch tilt effect
   * - Uses requestAnimationFrame for smoother performance
   * - Falls back to touchmove for mobile devices
   */
  galleryItems.forEach(item => {
    let animationFrame;

    function applyTilt(x, y, rect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    }

    function handleMove(clientX, clientY) {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const rect = item.getBoundingClientRect();
        applyTilt(clientX - rect.left, clientY - rect.top, rect);
      });
    }

    item.addEventListener('mousemove', e => handleMove(e.clientX, e.clientY));
    item.addEventListener('mouseleave', () => item.style.transform = '');
