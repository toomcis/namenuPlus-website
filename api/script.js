// ── i18n ─────────────────────────────────────────────────────────────────────
const SUPPORTED_LANGS = ['en', 'sk', 'cs'];
let currentLang = 'en';
let T = {};
function detectLang() {
  const saved = localStorage.getItem('tomenu_lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const browser = (navigator.language || 'en').toLowerCase();
  if (browser.startsWith('sk')) return 'sk';
  if (browser.startsWith('cs')) return 'cs';
  return 'en';
}
async function loadLang(lang) {
  try {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error();
    T = await res.json();
    currentLang = lang;
    localStorage.setItem('tomenu_lang', lang);
  } catch {
    if (lang !== 'en') {
      const res = await fetch('locales/en.json');
      T = await res.json();
      currentLang = 'en';
    }
  }
}
function t(key) {
  return T[key] ?? key;
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang.toUpperCase();
}
async function toggleLang() {
  const cycle = { en: 'sk', sk: 'cs', cs: 'en' };
  await loadLang(cycle[currentLang] || 'en');
  applyTranslations();
}
// ── endpoint accordion ────────────────────────────────────────────────────────
function toggleEndpoint(header) {
  header.nextElementSibling.classList.toggle('open');
}
// ── mailto ────────────────────────────────────────────────────────────────────
function openMailto(e) {
  e.preventDefault();
  const subject = encodeURIComponent(t('mailto.subject'));
  const body    = encodeURIComponent(t('mailto.body'));
  window.location.href = `mailto:contact@tomenu.sk?subject=${subject}&body=${body}`;
}
// ── TOC scroll highlight ──────────────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const tocLinks  = document.querySelectorAll('.toc a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
  tocLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });
// ── init ──────────────────────────────────────────────────────────────────────
(async () => {
  currentLang = detectLang();
  await loadLang(currentLang);
  applyTranslations();
})();