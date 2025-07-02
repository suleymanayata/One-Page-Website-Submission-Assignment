const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        lightboxImg.src = thumbnail.dataset.full;
        lightbox.classList.add('show');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('show');
    }
});
