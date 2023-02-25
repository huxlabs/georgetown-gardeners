export default function manageYear() {
  // Determine current year
  let currentYear = new Date().getFullYear();
  // Determine displayed year
  let displayedYear = document.getElementById('currentYear');
  // Check if displayed year is different from current year
  if (displayedYear.textContent !== currentYear) {
    // Update the displayed year in the footer
    displayedYear.textContent = currentYear;
  }
}
