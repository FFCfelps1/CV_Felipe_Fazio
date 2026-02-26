/* ─── THEME ──────────────────────────────────────────────────── */
const html = document.documentElement;

function getStoredTheme() {
  return localStorage.getItem('theme');
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Initialise theme on load
applyTheme(getStoredTheme() ?? getSystemTheme());

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ─── LANGUAGE ─────────────────────────────────────────────── */
let currentLang = localStorage.getItem('lang') ?? 'pt';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.getAttribute('data-lang') !== lang;
  });

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// Initialise language on load
applyLang(currentLang);

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
});

/* ─── SCROLL PROGRESS BAR ──────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

/* ─── BACK TO TOP ───────────────────────────────────────────── */
const backToTop = document.getElementById('back-to-top');

function updateBackToTop() {
  backToTop.classList.toggle('visible', window.scrollY > 400);
}

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── SCROLL SPY ────────────────────────────────────────────── */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = [...navLinks].map(a => {
  const id = a.getAttribute('href').slice(1);
  return document.getElementById(id);
}).filter(Boolean);

function updateScrollSpy() {
  const scrollMid = window.scrollY + window.innerHeight / 3;
  let current = sections[0];

  sections.forEach(sec => {
    if (sec && sec.offsetTop <= scrollMid) current = sec;
  });

  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + (current?.id ?? ''));
  });
}

/* ─── UNIFIED SCROLL LISTENER ──────────────────────────────── */
window.addEventListener('scroll', () => {
  updateProgress();
  updateBackToTop();
  updateScrollSpy();
}, { passive: true });

// Init on load
updateProgress();
updateBackToTop();
updateScrollSpy();

/* ─── SCROLL REVEAL ─────────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

// Stagger children inside sections
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 6) * 60}ms`;
  observer.observe(el);
});
