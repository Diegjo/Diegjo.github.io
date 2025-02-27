let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const thumbnailContainer = document.querySelector('.thumbnail-container');

// Generar thumbnails
items.forEach((item, index) => {
    const img = item.querySelector('img');
    const thumbnail = document.createElement('img');
    thumbnail.src = img.src;
    thumbnail.classList.add('thumbnail');
    if (index === 0) thumbnail.classList.add('active');
    thumbnail.addEventListener('click', () => goToSlide(index));
    thumbnailContainer.appendChild(thumbnail);
});

function moveSlide(direction) {
    const totalSlides = items.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

function updateSlides() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        document.querySelectorAll('.thumbnail')[index].classList.remove('active');
    });
    
    items[currentSlide].classList.add('active');
    document.querySelectorAll('.thumbnail')[currentSlide].classList.add('active');
}

// Autoplay opcional
// setInterval(() => moveSlide(1), 5000); 