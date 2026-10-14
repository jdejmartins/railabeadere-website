const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
function setLanguage(language) {
  document.documentElement.lang = language === 'tet' ? 'tet' : 'en';
  document.querySelectorAll('[data-en][data-tet]').forEach(el => {
    const value = el.dataset[language === 'tet' ? 'tet' : 'en'];
    if (value !== undefined) {
      if (el.tagName === 'H1' && value.includes('<span>')) el.innerHTML = value;
      else el.textContent = value;
    }
  });
  document.querySelectorAll('.lang').forEach(button => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  try { localStorage.setItem('railabeadere-language', language); } catch (_) {}
}
document.querySelectorAll('.lang').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
try { setLanguage(localStorage.getItem('railabeadere-language') || 'en'); } catch (_) { setLanguage('en'); }
