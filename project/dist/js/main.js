/* ============================================
   MAIN.JS — Component Loader & Init
   Loads HTML components via fetch, then renders dynamic content
   ============================================ */

(function () {
  const components = [
    'navbar',
    'mobile-menu',
    'hero',
    'about',
    'experience',
    'skills',
    'projects',
    'education',
    'certifications',
    'contact',
    'footer',
  ];

  async function loadComponent(name) {
    const placeholder = document.querySelector(`[data-component="${name}"]`);
    if (!placeholder) return;

    try {
      const response = await fetch(`components/${name}.html`);
      if (!response.ok) throw new Error(`Failed to load ${name}`);
      const html = await response.text();
      placeholder.innerHTML = html;
      placeholder.removeAttribute('data-component');
    } catch (err) {
      console.error(`Error loading component ${name}:`, err);
      placeholder.innerHTML = '';
    }
  }

  function initRevealObserver() {
    const elements = document.querySelectorAll('.reveal, .stagger');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
  }

  async function init() {
    await Promise.all(components.map(loadComponent));

    // Render dynamic content from data files
    if (window.renderSkills) window.renderSkills();
    if (window.renderExperience) window.renderExperience();
    if (window.renderEducation) window.renderEducation();
    if (window.renderCertifications) window.renderCertifications();
    if (window.renderProjects) window.renderProjects('projectsGrid', 'projectsFilter');

    // Render social icons
    if (window.socialLinks && window.createSocialIconHTML) {
      const socialsHtml = window.socialLinks.map((s) => window.createSocialIconHTML(s)).join('');
      ['heroSocialIcons', 'contactSocialIcons', 'footerSocialIcons', 'footerSocialSmall', 'mobileMenuSocial'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = socialsHtml;
      });
    }

    // Set current year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Re-init nav features now that navbar DOM exists
    if (window.__navInitMobileMenu) window.__navInitMobileMenu();
    if (window.__navInitActiveSection) window.__navInitActiveSection();
    if (window.__navUpdateDateTime) window.__navUpdateDateTime();
    if (window.__initThemeToggle) window.__initThemeToggle();
    if (window.__initContactForm) window.__initContactForm();

    // Init reveal animations for loaded components
    initRevealObserver();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
