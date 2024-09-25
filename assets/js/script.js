
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-load");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add("loaded");
        };
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});






    let currentImageIndex = 0;
    const images = document.querySelectorAll('.fade-image');
    const totalImages = images.length;

    function showNextImage() {
        // Remove "active" class from the current image
        images[currentImageIndex].classList.remove('active');
        
        // Calculate the next image index
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        
        // Add "active" class to the next image
        images[currentImageIndex].classList.add('active');
    }

    // Show the first image
    images[currentImageIndex].classList.add('active');

    // Set interval for image change (every 3 seconds)
    setInterval(showNextImage, 3500);







  // Get all text elements that will slide up
  const slideUpElements = document.querySelectorAll('.slide-up');

  // Function to add the 'active' class after page load
  function slideUpTexts() {
    slideUpElements.forEach(element => {
      element.classList.add('active'); // Trigger the slide up effect
    });
  }

  // Wait until the page fully loads, then trigger the animation
  window.onload = function() {
    slideUpTexts();
  };




/* Styling section UAE container */

  window.addEventListener('scroll', function() {
    let infoBoxes = document.querySelectorAll('.info-box');
    let triggerHeight = window.innerHeight / 1.3;

    infoBoxes.forEach(function(box) {
        let boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerHeight) {
            box.classList.add('active');
        }
    });
});



    

