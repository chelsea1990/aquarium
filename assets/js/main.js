// Small UI interactions: menu toggle, year, smooth scroll, gallery modal
document.addEventListener('DOMContentLoaded', function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle?.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mainNav.classList.remove('open');
      }
    });
  });

  // Gallery modal
  const thumbs = document.querySelectorAll('.thumb');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  thumbs.forEach(t => t.addEventListener('click', () => {
    const src = t.getAttribute('data-full') || t.getAttribute('src');
    modalImg.src = src;
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.setAttribute('aria-hidden', 'false');
  }));
  const closeModal = () => {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
  };
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});