const switchBtn = document.getElementById('lang-switch');
const enContent = document.querySelectorAll('.lang.en');
const jaContent = document.querySelectorAll('.lang.ja');

let lang = window.location.pathname.startsWith('/ja/') ? 'ja' : 'en';
applyLanguage(lang);

switchBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ja' : 'en';
  localStorage.setItem('preferredLang', lang);
  applyLanguage(lang);
  const newUrl = `/${lang}/`;
  history.pushState({lang}, '', newUrl);
});

function applyLanguage(language) {
  if (language === 'en') {
    enContent.style.display = '';
    jaContent.style.display = 'none';
    switchBtn.textContent = '日本語';
    document.documentElement.lang = 'en';
  } else {
    enContent.style.display = 'none';
    jaContent.style.display = '';
    switchBtn.textContent = 'English';
    document.documentElement.lang = 'ja';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const preferred = localStorage.getItem('preferredLang');
  if (preferred && preferred !== lang) {
    lang = preferred;
    applyLanguage(lang);
    history.replaceState({lang}, '', `/${lang}/`);
  }
});