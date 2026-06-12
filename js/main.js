// Header scroll state
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const toggleNav = () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
};
hamburger.addEventListener('click', toggleNav);
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleNav(); }
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Menu tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const menuContents = document.querySelectorAll('.menu-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    menuContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
faders.forEach(el => appearOnScroll.observe(el));
