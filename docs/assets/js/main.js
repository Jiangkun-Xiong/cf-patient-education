(() => {
  'use strict';
  const toggle = document.getElementById('language-toggle');
  let language = 'en';
  try {
    const saved = localStorage.getItem('cf-project-language');
    if (saved === 'en' || saved === 'zh') language = saved;
  } catch (_) { /* The overview also works without browser storage. */ }

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(element => {
      element.textContent = element.dataset[next];
    });
    document.title = next === 'zh'
      ? '囊性纤维化患者教育网站 | 熊江坤'
      : 'Cystic Fibrosis Patient Education | Jiangkun Xiong';
    if (toggle) {
      toggle.textContent = next === 'zh' ? 'EN' : '中文';
      toggle.setAttribute('aria-label', next === 'zh' ? 'Switch to English' : '切换为中文');
    }
    try { localStorage.setItem('cf-project-language', next); } catch (_) { /* Optional. */ }
  }

  toggle?.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  setLanguage(language);
})();
