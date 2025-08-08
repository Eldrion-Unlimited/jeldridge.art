document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById('enterBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const content = document.querySelector('.content');
  const hero = document.querySelector('.hero');
  const backToTop = document.getElementById('backToTop');

  // ENTER THE MIND → Reveal site
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      hero?.style?.display = 'none';
      content?.style?.display = 'block';
      hamburgerBtn?.style?.display = 'block';
    });
  }

  // HAMBURGER MENU TOGGLE
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('show');
    });
  }

  // BACK TO TOP button toggle
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // KONAMI CODE EASTER EGG (→ abyss.html)
  const konami = [38,38,40,40,37,39,37,39,66,65];
  let input = [];

  window.addEventListener("keydown", (e) => {
    input.push(e.keyCode);
    if (input.length > 10) input.shift();
    if (JSON.stringify(input) === JSON.stringify(konami)) {
      window.location.href = "abyss.html";
    }
  });
});

