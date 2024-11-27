const menuToggle = document.getElementById('menu__toggle');
const header = document.querySelector('.c-header');
const body = document.body;

// Voeg een eventlistener toe
menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    // Verschuif de header naar rechts
    header.style.transform = 'translateX(0)';
    // Verwijder scrollfunctionaliteit
    body.style.overflow = 'hidden';
  } else {
    // Reset de header naar zijn oorspronkelijke positie
    header.style.transform = 'translateX(-150px)';
    // Herstel scrollfunctionaliteit
    body.style.overflow = '';
  }
});
const lightModeForm = document.getElementById('light-mode');
const darkModeForm = document.getElementById('dark-mode');

function enableLightMode() {
  document.body.classList.remove('dark-mode');
  lightModeForm.style.display = 'none';
  darkModeForm.style.display = 'block';
}

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  darkModeForm.style.display = 'none';
  lightModeForm.style.display = 'block';
}


let activeSegment = "all"; // Start met de standaardweergave (All)

document.querySelectorAll('.c-devices__list input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', (e) => {
    const segment = e.target.id; // Haal de ID van de aangeklikte radio op
    const piechart = document.querySelector('.c-devices__piechart');

    // Controleer of "All" is geselecteerd of een specifieke segment
    if (segment === "all") {
      piechart.style.backgroundImage = `conic-gradient(
        var(--desktop-color) 70deg,
        var(--tablet-color) 0 235deg,
        var(--mobile-color) 0
      )`;
      activeSegment = "all"; // Reset actieve segment naar All
    } else if (activeSegment === segment) {
      // Deselecteer huidige actieve segment en keer terug naar "All"
      piechart.style.backgroundImage = `conic-gradient(
        var(--desktop-color) 70deg,
        var(--tablet-color) 0 235deg,
        var(--mobile-color) 0
      )`;
      activeSegment = "all";
      document.getElementById("all").checked = true; // Zet de All-radio-button actief
    } else {
      // Pas de grafiek aan voor het geselecteerde segment
      if (segment === "desktop") {
        piechart.style.backgroundImage = `conic-gradient(
          var(--desktop-color) 70deg,
          var(--gray-color) 0 235deg,
          var(--gray-color) 0
        )`;
      } else if (segment === "tablet") {
        piechart.style.backgroundImage = `conic-gradient(
          var(--gray-color) 70deg,
          var(--tablet-color) 0 235deg,
          var(--gray-color) 0
        )`;
      } else if (segment === "mobile") {
        piechart.style.backgroundImage = `conic-gradient(
          var(--gray-color) 70deg,
          var(--gray-color) 0 235deg,
          var(--mobile-color) 0
        )`;
      }
      activeSegment = segment; // Markeer het segment als actief
    }
  });
});
