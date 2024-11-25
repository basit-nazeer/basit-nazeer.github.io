// Lightbox functionality
let currentImageIndex = 0;
let images = [];

function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    // Store all images for navigation
    images = Array.from(document.querySelectorAll(".logo-container img"));
    currentImageIndex = images.indexOf(imgElement);

    lightbox.style.display = "flex";
    lightboxImg.src = imgElement.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showPreviousImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateLightboxImage();
}

function showNextImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    document.getElementById("lightbox-img").src = images[currentImageIndex].src;
}

// Keyboard navigation for lightbox
document.addEventListener("keydown", function (event) {
    const lightbox = document.getElementById("lightbox");
    if (lightbox.style.display === "flex") {
        if (event.key === "ArrowLeft") showPreviousImage();
        if (event.key === "ArrowRight") showNextImage();
        if (event.key === "Escape") closeLightbox();
    }
});
