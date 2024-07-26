// Initialize indices for both slideshows
let slideIndex1 = 1;
let slideIndex2 = 1;

// Function to show slides for a specific slideshow
function showSlides(slideIndex, slidesClassName, dotsClassName) {
    let i;
    let slides = document.getElementsByClassName(slidesClassName);
    let dots = document.getElementsByClassName(dotsClassName);

    // Ensure slideIndex wraps around correctly
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    // Hide all slides and remove active class from all dots
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add active class to the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}

// Next/previous controls for a specific slideshow
function plusSlides(n, slideshowNumber) {
    if (slideshowNumber === 1) {
        slideIndex1 += n;
        if (slideIndex1 > document.getElementsByClassName("mySlides1").length) {
            slideIndex1 = 1;
        } else if (slideIndex1 < 1) {
            slideIndex1 = document.getElementsByClassName("mySlides1").length;
        }
        showSlides(slideIndex1, "mySlides1", "dot1");
    } else if (slideshowNumber === 2) {
        slideIndex2 += n;
        if (slideIndex2 > document.getElementsByClassName("mySlides2").length) {
            slideIndex2 = 1;
        } else if (slideIndex2 < 1) {
            slideIndex2 = document.getElementsByClassName("mySlides2").length;
        }
        showSlides(slideIndex2, "mySlides2", "dot2");
    }
    // Sync slideshows
    syncSlides();
}

// Thumbnail image controls for a specific slideshow
function currentSlide(n, slideshowNumber) {
    if (slideshowNumber === 1) {
        slideIndex1 = n;
        if (slideIndex1 > document.getElementsByClassName("mySlides1").length) {
            slideIndex1 = 1;
        } else if (slideIndex1 < 1) {
            slideIndex1 = document.getElementsByClassName("mySlides1").length;
        }
        showSlides(slideIndex1, "mySlides1", "dot1");
    } else if (slideshowNumber === 2) {
        slideIndex2 = n;
        if (slideIndex2 > document.getElementsByClassName("mySlides2").length) {
            slideIndex2 = 1;
        } else if (slideIndex2 < 1) {
            slideIndex2 = document.getElementsByClassName("mySlides2").length;
        }
        showSlides(slideIndex2, "mySlides2", "dot2");
    }
    // Sync slideshows
    syncSlides();
}

// Sync slideshows
function syncSlides() {
    showSlides(slideIndex1, "mySlides1", "dot1");
    showSlides(slideIndex2, "mySlides2", "dot2");
}

// Automatic slideshow for both slideshows
function autoSlides() {
    slideIndex1++;
    slideIndex2++;
    if (slideIndex1 > document.getElementsByClassName("mySlides1").length) {
        slideIndex1 = 1;
    }
    if (slideIndex2 > document.getElementsByClassName("mySlides2").length) {
        slideIndex2 = 1;
    }
    syncSlides();
    setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

// Initialize slideshows
function initSlideshows() {
    syncSlides(); // Show initial slides
    autoSlides(); // Start automatic slideshow for both slideshows
}

// Call initSlideshows when the window loads
window.onload = initSlideshows;
