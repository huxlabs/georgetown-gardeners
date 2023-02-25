import loadAnimation from './services/loadAnimation.js';
import manageFloatAnimation from './services/manageFloatAnimation.js';
import setScrollToContact from './services/setScrollToContact.js';
import manageHeader from './services/manageHeader.js';
import manageYear from './services/manageYear.js';
import toggleMobileNav from './services/toggleMobileNav.js';

document.addEventListener("DOMContentLoaded", function() {
  // Load initial animation
  loadAnimation().then(() => {
    // Initiate manage float animation
    manageFloatAnimation()
  })
  manageFloatAnimation()

  // Set scroll to contact buttons
  setScrollToContact();
  // Initiate manage header
  manageHeader();
  // Manage year in footer
  manageYear();
  
  const mobileNavButton = document.getElementById('mobile-nav-button');
  mobileNavButton.addEventListener('click', toggleMobileNav);

  const mobileNavLinks = document.querySelectorAll('.mobile-nav li a');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', toggleMobileNav);
  });

  // Add scroll event listener to window
  window.addEventListener('scroll', function() {
    manageHeader();
    manageFloatAnimation();
  });
});



