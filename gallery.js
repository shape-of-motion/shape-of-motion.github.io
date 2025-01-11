let currentIndex = 0;
const itemWidth = 100; // Width of each carousel item including gap

document.addEventListener('DOMContentLoaded', function() {
  initGallery();
});

function initGallery() {
  // Set initial active state
  const firstIframe = document.querySelector('.iframe');
  const firstThumb = document.querySelector('.carousel-item');
  if (firstIframe && firstThumb) {
    firstIframe.classList.add('active');
    firstThumb.classList.add('active');
  }

  // Add click handlers to carousel items
  const carouselItems = document.querySelectorAll('.carousel-item');
  carouselItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateActiveItem(index);
      scrollToItem(index);
    });
  });
}

function updateActiveItem(index) {
  // Remove active class from all iframes and thumbnails
  document.querySelectorAll('.iframe').forEach(iframe => {
    iframe.classList.remove('active');
  });
  document.querySelectorAll('.carousel-item').forEach(thumb => {
    thumb.classList.remove('active');
  });

  // Add active class to selected thumbnail and corresponding iframe
  const selectedThumb = document.querySelectorAll('.carousel-item')[index];
  if (selectedThumb) {
    selectedThumb.classList.add('active');
  }

  const iframes = document.querySelectorAll('.iframe');
  if (iframes[index]) {
    iframes[index].classList.add('active');
  }
}

function scrollToItem(index) {
  const carousel = document.getElementById('results-objs-scroll');
  const scrollPosition = index * itemWidth;
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

function results_slide_left() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateActiveItem(currentIndex);
  scrollToItem(currentIndex);
}

function results_slide_right() {
  const totalItems = document.querySelectorAll('.carousel-item').length;
  currentIndex = (currentIndex + 1) % totalItems;
  updateActiveItem(currentIndex);
  scrollToItem(currentIndex);
}