const buttons = document.querySelectorAll('.accordion-button');
const titleChars = document.querySelectorAll('.dynamic-title > span');
const numChars = document.querySelectorAll('.section-number > span');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.getAttribute('aria-controls');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    document.getElementById(contentId).classList.toggle('expanded');
    button.querySelector('.icon').classList.toggle('expanded');
  });
});

const observerOptions = {
  root: document.querySelector('.main-content'),
  rootMargin: '0px 0px -70%',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      titleChars.forEach((char, index) => {
        char.style.transform = 'translateY(-120px)';
        char.style.transitionDelay = `${index * 50}ms`;
      });
      numChars.forEach((char, index) => {
        char.style.transform = 'translateY(-120px)';
        char.style.transitionDelay = `${index * 50}ms`;
      });
    } else {
      titleChars.forEach((char, index) => {
        char.style.transform = 'translateY(0)';
        char.style.transitionDelay = `${index * 50}ms`;
      });
      numChars.forEach((char, index) => {
        char.style.transform = 'translateY(0)';
        char.style.transitionDelay = `${index * 50}ms`;
      });
    }
  });
}, observerOptions);

observer.observe(document.getElementById('backend-section'));
