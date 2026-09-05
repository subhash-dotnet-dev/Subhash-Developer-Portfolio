/* ============================================
   THEME.JS — Dark/Light Theme System
   ============================================ */

(function () {
  const STORAGE_KEY = 'subhash-theme';
  const root = document.documentElement;

  function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0a0b0f' : '#f7f8fc');
    }
  }

  applyTheme(getInitialTheme());

  function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (toggle && !toggle.hasAttribute('data-theme-init')) {
      toggle.setAttribute('data-theme-init', 'true');
      toggle.setAttribute('aria-checked', root.getAttribute('data-theme') === 'light' ? 'true' : 'false');
      toggle.addEventListener('click', toggleTheme);
      toggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    const toggle = document.getElementById('themeToggle');
    if (toggle) toggle.setAttribute('aria-checked', next === 'light' ? 'true' : 'false');
  }

  document.addEventListener('DOMContentLoaded', initThemeToggle);

  window.__toggleTheme = toggleTheme;
  window.__initThemeToggle = initThemeToggle;
})();
