export default function manageHeader() {
  // Get a reference to the header
  const header = document.querySelector('header');
  // Get a reference to the hero section
  const heroSection = document.querySelector('#hero');
  // Get a reference to the logo
  const logo = document.querySelector('#logo');
   // Get a reference to the mobile nav
   const mobileNavButton = document.querySelector('.mobile-nav-button');
  // Calculate the position of the hero section relative to the top of the page
  if (window.pageYOffset > heroSection.offsetHeight - 100) {
    header.classList.add('scroll');
    // logo.setAttribute('src', 'assets/logo-stone.svg');
    mobileNavButton.classList.add('green')
  } else {
    logo.setAttribute('src', 'assets/logo.svg');
    header.classList.remove('scroll');
    mobileNavButton.classList.remove('green')
  }
}
