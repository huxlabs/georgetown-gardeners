export default function toggleMobileNav() {
  // Get a reference to the mobile nav
  const mobileNav = document.querySelector('.mobile-nav');
  // Get a reference to the mobile nav
  const mobileNavButton = document.querySelector('.mobile-nav-button');
  // Get a reference to the body
  const body = document.body;
  // Get a reference to the header
  const header = document.querySelector('header');
  
  if (mobileNav.classList.contains('open')) {
    // Close mobile nav
    mobileNav.classList.remove('open');
    mobileNavButton.classList.remove('open')
    body.style.overflow = 'auto';
    // header.style.backgroundImage = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))';
  } else {
    // Open mobile nav
    mobileNav.classList.add('open');
    mobileNavButton.classList.add('open');
    body.style.overflow = 'hidden';
    // header.style.backgroundImage = 'none';

  }

  // if (header.classList.contains('scroll')) {
  //   header.classList.remove('scroll')
  // }
}
