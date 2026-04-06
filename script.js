const themeToggleBtn = document.getElementById('theme-toggle');

// Check if user has a preference saved in localStorage 
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    // Toggle the data-theme attribute on the body tag
    if (document.body.hasAttribute('data-theme')) {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});

// --- Lightbox Functionality ---
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const galleryImages = document.querySelectorAll('.gallery-item img');

// Open lightbox when an image is clicked
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src; // Set the pop-up image to the clicked image
    });
});

// Close lightbox when the X is clicked
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking anywhere in the dark background
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
