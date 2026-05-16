// Smooth scroll animation for all links
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function () {
    console.log('Button clicked');
  });
});

// Simple fade-in effect on scroll
const cards = document.querySelectorAll('.box, .project-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = '0.5s';
});