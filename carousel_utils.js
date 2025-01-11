// function vid_slide_left() {
//   slider_window = document.getElementById('result-video-scroll');
//   // get the width of the window
//   width = slider_window.offsetWidth + 4;
//   if (slider_window.scrollLeft <= 0) {
//     // If at the beginning, jump to the end
//     slider_window.scrollLeft = slider_window.scrollWidth - width;
//   } else {
//     // Make sure we move to multiples of the width. This is especially important because of smoothScroll.
//     slider_window.scrollLeft = Math.round((slider_window.scrollLeft - width) / width) * width;
//   }
// }

// function vid_slide_right() {
//   slider_window = document.getElementById('result-video-scroll');
//   // get the width of the window
//   width = slider_window.offsetWidth + 4;
//   if (slider_window.scrollLeft + width >= slider_window.scrollWidth) {
//     // If at the end, jump to the beginning
//     slider_window.scrollLeft = 0;
//   } else {
//     // Make sure we move to multiples of the width. This is especially important because of smoothScroll.
//     slider_window.scrollLeft = Math.round((slider_window.scrollLeft + width) / width) * width;
//   }
// }


// Carousel navigation functions
function results_slide_left() {
  const slider_window = document.getElementById('results-objs-scroll');
  // Get the width of the window including the gap
  const width = slider_window.offsetWidth + 4;

  if (slider_window.scrollLeft <= 0) {
    // If at the beginning, jump to the end
    slider_window.scrollLeft = slider_window.scrollWidth - width;
  } else {
    // Make sure we move to multiples of the width
    slider_window.scrollLeft = Math.round((slider_window.scrollLeft - width) / width) * width;
  }
}

function results_slide_right() {
  const slider_window = document.getElementById('results-objs-scroll');
  // Get the width of the window including the gap
  const width = slider_window.offsetWidth + 4;

  if (slider_window.scrollLeft + width >= slider_window.scrollWidth) {
    // If at the end, jump to the beginning
    slider_window.scrollLeft = 0;
  } else {
    // Make sure we move to multiples of the width
    slider_window.scrollLeft = Math.round((slider_window.scrollLeft + width) / width) * width;
  }
}

// Helper function to set up smooth scrolling behavior
function initCarouselScroll() {
  const carousel = document.getElementById('results-objs-scroll');
  if (carousel) {
    // Add smooth scrolling behavior
    carousel.style.scrollBehavior = 'smooth';
    
    // Add scroll event listener to handle scroll snapping
    carousel.addEventListener('scrollend', () => {
      const width = carousel.offsetWidth + 4;
      carousel.scrollLeft = Math.round(carousel.scrollLeft / width) * width;
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarouselScroll);