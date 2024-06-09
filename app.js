document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        slides.forEach(slide => {
            slide.style.transform = `translateX(${offset}%)`;
        });
    }

    document.querySelector('.prev').addEventListener('click', function() {
        showSlide(currentSlide - 1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide);
});






