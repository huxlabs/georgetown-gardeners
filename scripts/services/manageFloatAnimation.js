// export default function manageFloatAnimation() {
//   const float = document.querySelectorAll('.float');

//   float.forEach(item => {
//     if (isElementInViewport(item)) {
//       item.classList.add('is-visible');
//     } 
//     // else {
//     //   item.classList.remove('is-visible');
//     // }
//   });
// }

// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

export default function manageFloatAnimation() {
  const float = document.querySelectorAll('.float');
  
  // Create a new IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // If the observed element is in the viewport
      if (entry.isIntersecting) {
        // Get the index of the observed element
        const index = Array.from(float).indexOf(entry.target);
        // Set a delay based on the index
        const delay = index * 50;
        // Add a class to the observed element with a delayed animation
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        // Stop observing the observed element
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe each float element
  float.forEach(item => {
    observer.observe(item);
  });
}


