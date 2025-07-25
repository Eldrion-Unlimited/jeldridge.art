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
