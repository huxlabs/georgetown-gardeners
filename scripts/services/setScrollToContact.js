export default function setScrollToContact() {
  // Get a reference to all the scroll buttons
  const scrollButtons = document.querySelectorAll('.scrollToContact');
  // Get a reference to the contact section
  const contactSection = document.getElementById('contact');
  // Add a click event listener to each scroll button
  scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Calculate the position of the contact section relative to the top of the page
      const contactSectionPosition = contactSection.offsetTop;
      // Scroll the page to the position of the contact section
      window.scrollTo({
        top: contactSectionPosition,
        behavior: 'smooth'
      });
    });
  });
}
