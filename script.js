// ── NAV: появление фона при скролле ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HERO: анимация zoom после загрузки ──
document.querySelector('.hero').classList.add('loaded');

// ── BURGER меню (мобайл) ──
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '100%';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(10,10,10,.98)';
  navLinks.style.padding = '24px';
  navLinks.style.gap = '20px';
});

// ── SCROLL REVEAL ──
const animatedItems = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

animatedItems.forEach(item => observer.observe(item));
