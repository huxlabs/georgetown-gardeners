export default function loadAnimation() {
  return new Promise((resolve, reject) => {
    try {
      // Initialize the Lottie animation
      var animation = lottie.loadAnimation({
        container: document.getElementById('loading-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'assets/flower.json'
      });
      animation.setSpeed(2.5);

      // Hide loading screen when animation completes
      animation.addEventListener("complete", function () {
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.opacity = 0; // Set opacity to 0
        setTimeout(function () {
          loadingScreen.style.display = "none";
          resolve(); // Resolve the promise
        }, 500); // Wait for the transition to complete before setting display to none
      });
    } catch (error) {
      console.error(error); // Log the error to the console
      var loadingScreen = document.getElementById("loading-screen");
      loadingScreen.style.display = "none"; // Hide the loading screen
      reject(error); // Reject the promise
    }
  });
}

