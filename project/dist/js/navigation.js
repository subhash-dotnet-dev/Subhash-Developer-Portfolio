/* ============================================
   NAVIGATION.JS — Navbar scroll, Date/Time, Mobile Menu
   Handles both: main page (components loaded async) and sub-pages (inline navbar)
   ============================================ */

(function () {
  let scrollTicking = false;

  function updateScrollState() {
    const navbar = document.getElementById('navbar');
    const progress = document.getElementById('scrollProgress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollTop > 20);
    }
    if (progress) {
      progress.style.width = scrollPct + '%';
    }
    scrollTicking = false;
  }

  function onScroll() {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollState);
      scrollTicking = true;
    }
  }

  /* ---------- Date/Time ---------- */
  function updateDateTime() {
    const now = new Date();
    const dateEl = document.getElementById('navDate');
    const timeEl = document.getElementById('navTime');

    if (dateEl) {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = String(now.getDate()).padStart(2, '0');
      dateEl.textContent = `${day} ${months[now.getMonth()]} ${now.getFullYear()}`;
    }

    if (timeEl) {
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      timeEl.textContent = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    }
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const menuBtn = document.getElementById('navMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!menuBtn || !mobileMenu) return;
    if (menuBtn.hasAttribute('data-initialized')) return;
    menuBtn.setAttribute('data-initialized', 'true');

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen) {
        menuBtn.setAttribute('aria-label', 'Close navigation menu');
      } else {
        menuBtn.setAttribute('aria-label', 'Open navigation menu');
      }
    }

    menuBtn.addEventListener('click', () => toggleMenu());

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 820 && mobileMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  /* ---------- Active Section Tracking ---------- */
  function initActiveSection() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('data-section') === id);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- Init on DOMContentLoaded (sub-pages with inline navbar) ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    // Start date/time interval — works once navbar elements exist
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Init mobile menu (works on sub-pages where navbar is inline)
    initMobileMenu();

    // Init active section (works on sub-pages with sections)
    initActiveSection();

    // Scroll state
    window.addEventListener('scroll', onScroll, { passive: true });
    updateScrollState();
  });

  // Expose for main.js to call after async components load
  window.__navInitMobileMenu = initMobileMenu;
  window.__navInitActiveSection = initActiveSection;
  window.__navUpdateDateTime = updateDateTime;
})();
