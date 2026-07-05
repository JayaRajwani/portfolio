// Case card expand/collapse
document.querySelectorAll('.case-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('aria-controls');
    const body = document.getElementById(targetId);
    if (!body) return;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.textContent = isOpen ? 'expand ↓' : 'collapse ↑';
    body.hidden = isOpen;
    btn.closest('.case').toggleAttribute('open', !isOpen);
  });
});

// Auto year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
