document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.education-card');

  cards.forEach(card => {
    card.setAttribute('tabindex', 0);  // Make focusable

    card.addEventListener('focus', () => {
      card.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
      card.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('blur', () => {
      card.style.boxShadow = '';
      card.style.transform = '';
    });
  });
});
