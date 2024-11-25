// Store references to all images
let currentImageIndex = 0;
let images = [];

// Function to open the lightbox and display the clicked image
function openLightbox(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");

    // Get all image elements in the thumbnail container
    images = Array.from(document.querySelectorAll(".thumbnail-container img"));

    // Find the index of the clicked image
    currentImageIndex = images.indexOf(imgElement);

    // Show the lightbox
    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

// Function to close the lightbox when clicked
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

// Function to navigate to the previous image
function showPreviousImage() {
    if (images.length === 0) return; // Guard clause if no images are present
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

// Function to navigate to the next image
function showNextImage() {
    if (images.length === 0) return; // Guard clause if no images are present
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

// Helper function to update the lightbox image
function updateLightboxImage() {
    var lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentImageIndex].src;
}

// Listen for keydown events for navigation
document.addEventListener("keydown", function (event) {
    if (document.getElementById("lightbox").style.display === "flex") {
        if (event.key === "ArrowLeft") {
            showPreviousImage();
        } else if (event.key === "ArrowRight") {
            showNextImage();
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});


