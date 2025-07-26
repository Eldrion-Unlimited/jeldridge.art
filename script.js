document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.getElementById('enterBtn');
  const contentSection = document.querySelector('.content');

  function smoothScrollTo(targetY, duration = 2500) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) requestAnimationFrame(scrollStep);
    }

    requestAnimationFrame(scrollStep);
  }

  if (enterBtn && contentSection) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetY = contentSection.offsetTop;
      smoothScrollTo(targetY, 2500);
    });
  }

  // Back to top button
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1.5) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

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

// BACK TO TOP BUTTON BEHAVIOR
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Delay showing hamburger to avoid showing during scroll
  setTimeout(() => {
    const hamburger = document.getElementById('hamburgerBtn');
    if (hamburger) hamburger.style.display = 'block';
  }, 800);
});

// OPTIONAL: Gallery mouse tilt
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mousemove', (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = '';
  });
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector('.trident').classList.add('glow-in');
    document.querySelector('.signature-img').classList.add('glow-in');
  }, 3000); // delay matches flicker duration
});
