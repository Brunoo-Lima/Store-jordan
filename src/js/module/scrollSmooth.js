export default function scrollSmooth() {
  const linkInterno = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linkInterno.forEach((links) => {
    links.addEventListener('click', scrollToSection);
  })
}