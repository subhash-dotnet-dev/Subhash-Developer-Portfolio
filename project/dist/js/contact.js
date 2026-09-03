/* ============================================
   CONTACT.JS — Form Validation & Mailto
   ============================================ */

(function () {
  function validateField(field, errorEl, validators) {
    const value = field.value.trim();
    for (const validator of validators) {
      const error = validator(value);
      if (error) {
        errorEl.textContent = error;
        field.setAttribute('aria-invalid', 'true');
        return false;
      }
    }
    errorEl.textContent = '';
    field.setAttribute('aria-invalid', 'false');
    return true;
  }

  const validators = {
    required: (val) => (val ? '' : 'This field is required.'),
    minLength: (min) => (val) => (val.length >= min ? '' : `Must be at least ${min} characters.`),
    email: (val) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? '' : 'Please enter a valid email address.'),
  };

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const nameField = document.getElementById('contactName');
    const emailField = document.getElementById('contactEmail');
    const subjectField = document.getElementById('contactSubject');
    const messageField = document.getElementById('contactMessage');

    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorSubject = document.getElementById('errorSubject');
    const errorMessage = document.getElementById('errorMessage');

    const nameValid = validateField(nameField, errorName, [validators.required, validators.minLength(2)]);
    const emailValid = validateField(emailField, errorEmail, [validators.required, validators.email]);
    const subjectValid = validateField(subjectField, errorSubject, [validators.required, validators.minLength(3)]);
    const messageValid = validateField(messageField, errorMessage, [validators.required, validators.minLength(10)]);

    if (!nameValid || !emailValid || !subjectValid || !messageValid) {
      // Focus first invalid field
      const firstInvalid = [nameField, emailField, subjectField, messageField].find(
        (f) => f.getAttribute('aria-invalid') === 'true'
      );
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Show loading state
    const submitBtn = document.getElementById('contactSubmit');
    submitBtn.classList.add('btn-loading');

    // Build mailto link as a professional fallback (no backend)
    const email = window.profileData ? window.profileData.email : 'subhash.yadav.dev@gmail.com';
    const subject = encodeURIComponent(subjectField.value.trim());
    const body = encodeURIComponent(
      `Name: ${nameField.value.trim()}\nEmail: ${emailField.value.trim()}\n\nMessage:\n${messageField.value.trim()}`
    );

    // Small delay for UX (loading state feedback)
    setTimeout(() => {
      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      submitBtn.classList.remove('btn-loading');

      // Show success message
      const successEl = document.getElementById('formSuccess');
      if (successEl) {
        successEl.style.display = 'flex';
        setTimeout(() => {
          successEl.style.display = 'none';
        }, 8000);
      }

      // Reset form
      form.reset();
    }, 600);
  }

  function initForm() {
    const form = document.getElementById('contactForm');
    if (!form || form.hasAttribute('data-form-init')) return;
    form.setAttribute('data-form-init', 'true');

    form.addEventListener('submit', handleSubmit);

    // Real-time validation on blur
    const nameField = document.getElementById('contactName');
    const emailField = document.getElementById('contactEmail');
    const subjectField = document.getElementById('contactSubject');
    const messageField = document.getElementById('contactMessage');

    if (nameField) {
      nameField.addEventListener('blur', () =>
        validateField(nameField, document.getElementById('errorName'), [validators.required, validators.minLength(2)])
      );
    }
    if (emailField) {
      emailField.addEventListener('blur', () =>
        validateField(emailField, document.getElementById('errorEmail'), [validators.required, validators.email])
      );
    }
    if (subjectField) {
      subjectField.addEventListener('blur', () =>
        validateField(subjectField, document.getElementById('errorSubject'), [validators.required, validators.minLength(3)])
      );
    }
    if (messageField) {
      messageField.addEventListener('blur', () =>
        validateField(messageField, document.getElementById('errorMessage'), [validators.required, validators.minLength(10)])
      );
    }
  }

  document.addEventListener('DOMContentLoaded', initForm);
  window.__initContactForm = initForm;
})();
