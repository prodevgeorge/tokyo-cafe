const switchBtn = document.getElementById('lang-switch');
// const enContent = document.querySelector('.lang.en');
// const jaContent = document.querySelector('.lang.ja');

let lang = window.location.pathname.startsWith('/ja/') ? 'ja' : 'en';
applyLanguage(lang);

switchBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ja' : 'en';
  localStorage.setItem('preferredLang', lang);
  applyLanguage(lang);

  // vvvvv g: disabled temporarily so I don't have to deal with url issues when developing with Live Preview
  // const newUrl = `/${lang}/`;
  // history.pushState({lang}, '', newUrl);
  // ^^^^^ g: disabled temporarily so I don't have to deal with url issues when developing with Live Preview
});

function applyLanguage(language) {
  if (language === 'en') {
    // enContent.style.display = '';
    // jaContent.style.display = 'none';
    switchBtn.textContent = '日本語';
    document.documentElement.lang = 'en';
  } else {
    // enContent.style.display = 'none';
    // jaContent.style.display = '';
    switchBtn.textContent = 'Eng';
    document.documentElement.lang = 'ja';
  }

  document.querySelectorAll('.lang.en').forEach(el => {
    el.style.display = (language === 'en') ? '' : 'none';
  });
  document.querySelectorAll('.lang.ja').forEach(el => {
    el.style.display = (language === 'ja') ? '' : 'none';
  });

}

document.addEventListener('DOMContentLoaded', () => {
  const preferred = localStorage.getItem('preferredLang');
  if (preferred && preferred !== lang) {
    lang = preferred;
    applyLanguage(lang);
    // g vvvvv: disabled temporarily so I don't have to deal with url issues when developing with Live Preview
    // history.replaceState({lang}, '', `/${lang}/`);
    // g ^^^^^: disabled temporarily so I don't have to deal with url issues when developing with Live Preview
  }
});