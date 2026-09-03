/* ============================================
   PROJECTS.JS — Project Cards, Filter, Details
   ============================================ */

(function () {
  /* ---------- Social Icon SVG Paths ---------- */
  const socialIcons = {
    github: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    leetcode: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.48 24l-1.68-1.68s.52-.52.52-1.52h-2.4c0 1.52 1.2 2.72 2.72 2.72l1.68.48zM16.8 20.16H8.4c-1.32 0-2.4-1.08-2.4-2.4V9.36c0-1.32 1.08-2.4 2.4-2.4h8.4c1.32 0 2.4 1.08 2.4 2.4v8.4c0 1.32-1.08 2.4-2.4 2.4z M16.56 8.76H8.64c-.66 0-1.2.54-1.2 1.2v7.68c0 .66.54 1.2 1.2 1.2h7.92c.66 0 1.2-.54 1.2-1.2V9.96c0-.66-.54-1.2-1.2-1.2z M16.8 0L15.12 1.68s.52.52.52 1.52c0 1-.52 1.52-.52 1.52L16.8 6.4l1.68-1.68s-.52-.52-.52-1.52c0-1 .52-1.52.52-1.52L16.8 0zM8.4 1.44c-1.32 0-2.4 1.08-2.4 2.4v2.4h2.4v-2.4h8.4V3.84c0-1.32-1.08-2.4-2.4-2.4H8.4z"/></svg>',
    hackerrank: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.32C6.3 22.32 1.68 17.7 1.68 12S6.3 1.68 12 1.68 22.32 6.3 22.32 12 17.7 22.32 12 22.32z"/><path d="M12 6.5c-.83 0-1.5.67-1.5 1.5v8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V8c0-.83-.67-1.5-1.5-1.5zm-3.5 4c-.28 0-.5.22-.5.5v6c0 2.21 1.79 4 4 4s4-1.79 4-4v-6c0-.28-.22-.5-.5-.5s-.5.22-.5.5v6c0 1.66-1.34 3-3 3s-3-1.34-3-3v-6c0-.28-.22-.5-.5-.5z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
  };

  function createSocialIconHTML(link) {
    const iconSvg = socialIcons[link.icon] || '';
    return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-icon" data-tooltip="${link.name}" aria-label="${link.ariaLabel}">
      ${iconSvg}
    </a>`;
  }

  window.createSocialIconHTML = createSocialIconHTML;

  /* ---------- Skill Icons ---------- */
  const skillIcons = {
    code: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    layout: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    wrench: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  };

  /* ---------- Render Skills ---------- */
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid || !window.skillsData) return;

    grid.innerHTML = window.skillsData.map((category) => {
      const iconSvg = skillIcons[category.icon] || skillIcons.code;
      const skillsHtml = category.skills.map((skill) => {
        const levelClass =
          skill.level === 'Primary' ? 'skill-level-primary' :
          skill.level === 'Strong' ? 'skill-level-strong' :
          'skill-level-working';
        return `<div class="skill-item">
          <span class="skill-item-name">${skill.name}</span>
          <span class="skill-item-level ${levelClass}">${skill.level}</span>
        </div>`;
      }).join('');

      return `<div class="skill-card">
        <div class="skill-card-header">
          <div class="skill-card-icon">${iconSvg}</div>
          <h3 class="skill-card-title">${category.category}</h3>
        </div>
        <div class="skill-list">${skillsHtml}</div>
      </div>`;
    }).join('');
  }

  /* ---------- Render Experience ---------- */
  function renderExperience() {
    const timeline = document.getElementById('experienceTimeline');
    if (!timeline || !window.experienceData) return;

    timeline.innerHTML = window.experienceData.map((exp) => {
      const contributionsHtml = exp.contributions.map((c) => `<li>${c}</li>`).join('');
      const techHtml = exp.technologies.map((t) => `<span class="tech-badge">${t}</span>`).join('');

      return `<div class="timeline-item reveal">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${exp.role}</h3>
            <span class="timeline-period">${exp.period}</span>
          </div>
          <div class="timeline-org">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>
            ${exp.organization} · ${exp.location}
          </div>
          <p class="timeline-desc">${exp.description}</p>
          <ul class="timeline-contributions">${contributionsHtml}</ul>
          <div class="timeline-tech">${techHtml}</div>
        </div>
      </div>`;
    }).join('');
  }

  /* ---------- Render Education ---------- */
  function renderEducation() {
    const grid = document.getElementById('educationGrid');
    if (!grid || !window.educationData) return;

    grid.innerHTML = window.educationData.map((edu) => {
      return `<div class="education-card">
        <div class="education-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <h3 class="education-degree">${edu.degree}</h3>
        <p class="education-institution">${edu.institution}</p>
        <p class="education-period">${edu.period}${edu.score ? ' · ' + edu.score : ''}</p>
        <p class="education-desc">${edu.description}</p>
      </div>`;
    }).join('');
  }

  /* ---------- Render Certifications ---------- */
  function renderCertifications() {
    const grid = document.getElementById('certificationsGrid');
    if (!grid || !window.certificationsData) return;

    grid.innerHTML = window.certificationsData.map((cert, index) => {
      return `<div class="cert-card" data-cert-index="${index}" tabindex="0" role="button" aria-label="View ${cert.title} certificate details">
        <div class="cert-card-image">
          <img src="${cert.image}" alt="${cert.title} certificate" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.background='var(--bg-elevated)'" />
        </div>
        <div class="cert-card-body">
          <h3 class="cert-card-title">${cert.title}</h3>
          <p class="cert-card-issuer">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            ${cert.issuer}
          </p>
          <p class="cert-card-date">${cert.date}</p>
          <p class="cert-card-desc">${cert.description}</p>
        </div>
      </div>`;
    }).join('');

    // Add click handlers for cert modal
    const cards = grid.querySelectorAll('.cert-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => openCertModal(parseInt(card.dataset.certIndex)));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCertModal(parseInt(card.dataset.certIndex));
        }
      });
    });
  }

  /* ---------- Certificate Modal ---------- */
  let certModalTrigger = null;

  function openCertModal(index) {
    const cert = window.certificationsData[index];
    if (!cert) return;

    const modal = document.getElementById('certModal');
    const content = document.getElementById('certModalContent');
    if (!modal || !content) return;

    certModalTrigger = document.activeElement;

    content.innerHTML = `
      <img src="${cert.image}" alt="${cert.title} certificate" class="cert-modal-image" onerror="this.style.display='none'" />
      <div class="cert-modal-body">
        <h3 class="cert-modal-title" id="certModalTitle">${cert.title}</h3>
        <p class="cert-card-issuer" style="margin-bottom: var(--space-2);">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          ${cert.issuer} · ${cert.date}
        </p>
        <p style="color: var(--text-secondary); font-size: var(--fs-sm);">${cert.description}</p>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('certModalClose');
    if (closeBtn) closeBtn.focus();
  }

  function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (certModalTrigger && certModalTrigger.focus) certModalTrigger.focus();
  }

  /* ---------- Render Projects ---------- */
  function renderProjects(gridId, filterId) {
    const grid = document.getElementById(gridId);
    if (!grid || !window.projectsData) return;

    const onSubPage = window.location.pathname.includes('/pages/');
    const imgBase = onSubPage ? '../' : '';
    const detailBase = onSubPage ? 'project-details.html' : 'pages/project-details.html';

    function render(filter) {
      const filtered = filter === 'All'
        ? window.projectsData
        : window.projectsData.filter((p) =>
            p.category === filter || p.tags.includes(filter)
          );

      if (filtered.length === 0) {
        grid.innerHTML = '<div class="no-results">No projects found in this category.</div>';
        return;
      }

      grid.innerHTML = filtered.map((project) => {
        const tagsHtml = project.tags.map((t) => `<span class="project-card-tag">${t}</span>`).join('');
        const detailLink = project.hasDetails
          ? `<a href="${detailBase}?id=${project.id}" class="project-card-link">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>`
          : `<span class="project-card-link" style="color: var(--text-muted);">Details coming soon</span>`;

        const githubLink = project.github
          ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-icon" aria-label="View ${project.title} on GitHub" data-tooltip="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>
            </a>`
          : '';

        const demoLink = project.liveDemo
          ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-icon" aria-label="View ${project.title} live demo" data-tooltip="Live Demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>`
          : '';

        return `<div class="project-card">
          <div class="project-card-image">
            <img src="${imgBase}${project.image}" alt="${project.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.style.background='var(--bg-elevated)'" />
            <div class="project-card-overlay">
              ${githubLink}
              ${demoLink}
            </div>
          </div>
          <div class="project-card-body">
            <div class="project-card-tags">${tagsHtml}</div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-desc">${project.shortDescription}</p>
            <div class="project-card-footer">
              ${detailLink}
            </div>
          </div>
        </div>`;
      }).join('');
    }

    // Init filter
    if (filterId) {
      const filterContainer = document.getElementById(filterId);
      if (filterContainer) {
        filterContainer.querySelectorAll('.filter-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            filterContainer.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            render(btn.dataset.filter);
          });
        });
      }
    }

    render('All');
  }

  /* ---------- Render Project Detail Page ---------- */
  function renderProjectDetail() {
    const container = document.getElementById('projectDetailContent');
    if (!container || !window.projectsData) return;

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const project = window.projectsData.find((p) => p.id === projectId);

    if (!project) {
      container.innerHTML = `<div class="container" style="text-align: center; padding-top: var(--space-7);">
        <div class="error-code" style="font-size: 4rem;">404</div>
        <h1 class="error-title">Project Not Found</h1>
        <p class="error-desc">The project you're looking for doesn't exist.</p>
        <a href="projects.html" class="btn btn-primary" style="margin-top: var(--space-3);">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Projects
        </a>
      </div>`;
      return;
    }

    const imgBase = window.location.pathname.includes('/pages/') ? '../' : '';
    const tagsHtml = project.tags.map((t) => `<span class="project-card-tag">${t}</span>`).join('');
    const techHtml = project.technologies.map((t) => `<span class="tech-badge">${t}</span>`).join('');
    const featuresHtml = project.features.map((f) => `<li>${f}</li>`).join('');

    const githubBtn = project.github
      ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.21 11.19.6.11.82-.26.82-.57 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57C20.56 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>
          View on GitHub
        </a>`
      : '';

    const demoBtn = project.liveDemo
      ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Live Demo
        </a>`
      : '';

    const detailHtml = `
      <div class="container">
        <div class="project-detail-header reveal">
          <a href="projects.html" class="project-detail-back">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Projects
          </a>
          <h1 class="project-detail-title">${project.title}</h1>
          <div class="project-detail-tags">${tagsHtml}</div>
        </div>

        <img src="${imgBase}${project.image}" alt="${project.title}" class="project-detail-image reveal" onerror="this.style.display='none'" />

        <div class="project-detail-layout">
          <div class="project-detail-content">
            <div class="reveal">
              <h3 class="detail-block-title">Overview</h3>
              <p>${project.overview}</p>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Problem</h3>
              <p>${project.problem}</p>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Solution</h3>
              <p>${project.solution}</p>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Key Features</h3>
              <ul class="detail-features">${featuresHtml}</ul>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Architecture</h3>
              <p>${project.architecture}</p>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Challenges</h3>
              <p>${project.challenges}</p>
            </div>
            <div class="reveal">
              <h3 class="detail-block-title">Results</h3>
              <p>${project.results}</p>
            </div>
            <div class="reveal project-detail-cta">
              ${githubBtn}
              ${demoBtn}
            </div>
          </div>

          <div class="project-detail-sidebar">
            <div class="sidebar-card reveal">
              <h4 class="sidebar-card-title">Technology Stack</h4>
              <div class="sidebar-tech-list">${techHtml}</div>
            </div>
            <div class="sidebar-card reveal">
              <h4 class="sidebar-card-title">Category</h4>
              <p style="color: var(--text-secondary); font-size: var(--fs-sm);">${project.category}</p>
            </div>
            <div class="sidebar-card reveal">
              <h4 class="sidebar-card-title">Actions</h4>
              <div style="display: flex; flex-direction: column; gap: var(--space-2);">
                ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%;">GitHub Repository</a>` : ''}
                <a href="projects.html" class="btn btn-ghost" style="width: 100%;">All Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = detailHtml;

    // Re-init reveal observer for new elements
    const newRevealElements = container.querySelectorAll('.reveal');
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
    newRevealElements.forEach((el) => observer.observe(el));

    // Update page title
    document.title = `${project.title} — Subhash Yadav`;
  }

  /* ---------- Expose ---------- */
  window.renderSkills = renderSkills;
  window.renderExperience = renderExperience;
  window.renderEducation = renderEducation;
  window.renderCertifications = renderCertifications;
  window.renderProjects = renderProjects;
  window.renderProjectDetail = renderProjectDetail;
  window.closeCertModal = closeCertModal;

  // Close cert modal on close button / backdrop / escape
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certModal');
    const closeBtn = document.getElementById('certModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCertModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCertModal();
    });
  });
})();
