const menuToggle = document.getElementById('menu__toggle');
const header = document.querySelector('.c-header');
const body = document.body;

// Voeg een eventlistener toe
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    // Verschuif de header naar rechts
    header.style.transform = 'translateX(150px)';
    // Verwijder scrollfunctionaliteit
    body.style.overflow = 'hidden';
  } else {
    // Reset de header naar zijn oorspronkelijke positie
    header.style.transform = 'translateX(0)';
    // Herstel scrollfunctionaliteit
    body.style.overflow = '';
  }
});
