const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Set an interval to automatically advance to the next image every 3 seconds (adjust the interval duration as needed)
const slideshowInterval = setInterval(nextImage, 3000);

// Optionally, you can stop the slideshow when the user interacts with it
document.querySelector('.slideshow').addEventListener('mouseenter', () => {
    clearInterval(slideshowInterval);
});

document.querySelector('.slideshow').addEventListener('mouseleave', () => {
    // Resume the slideshow when the mouse leaves the slideshow area
    slideshowInterval = setInterval(nextImage, 2000);
});

// Initially, start the slideshow
showImage(currentIndex);