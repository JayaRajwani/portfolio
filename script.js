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

// Keep the skills section compact on small screens.
const skillsDetails = document.querySelector('.skills');
if (skillsDetails && window.matchMedia) {
  const compactSkills = window.matchMedia('(max-width: 700px)');
  const syncSkills = () => {
    if (compactSkills.matches) {
      skillsDetails.removeAttribute('open');
    } else {
      skillsDetails.setAttribute('open', '');
    }
  };
  syncSkills();
  if (compactSkills.addEventListener) {
    compactSkills.addEventListener('change', syncSkills);
  } else {
    compactSkills.addListener(syncSkills);
  }
}

// Auto year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
