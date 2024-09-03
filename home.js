let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideInterval); // Stop auto slide when user manually changes slides
    showSlides(slideIndex += n);
    slideInterval = setInterval(autoShowSlides, 5000); // Restart auto slide after user input
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(slideInterval); // Stop auto slide when user manually changes slides
    showSlides(slideIndex = n);
    slideInterval = setInterval(autoShowSlides, 5000); // Restart auto slide after user input
}

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

// Initialize the slideshow and set the interval
showSlides(slideIndex);
slideInterval = setInterval(autoShowSlides, 5000); // Change image every 3 seconds

function navigateToPage(page) {
    window.location.href = page;
}

const navButton = document.getElementById('navButton');
const hoverMenu = document.getElementById('hoverMenu');

navButton.addEventListener('mouseenter', function() {
    const rect = navButton.getBoundingClientRect();

    // Position the menu
    hoverMenu.style.top = rect.bottom + 'px';
    hoverMenu.style.left = '70%'; // Set to 50% of the viewport width
    hoverMenu.style.transform = `translateX(-50%)`; // Center it by shifting it left by 50% of its own width

    hoverMenu.style.display = 'flex';
});

navButton.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!hoverMenu.matches(':hover')) {
            hoverMenu.style.display = 'none';
        }
    }, 200);
});

hoverMenu.addEventListener('mouseleave', function() {
    hoverMenu.style.display = 'none';
});

