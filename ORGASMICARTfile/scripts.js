document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const images = document.querySelectorAll('.rotating-image');
    const totalImages = images.length;

    function showImage(n) {
        images.forEach((img, i) => {
            img.style.display = i === n ? 'block' : 'none';
        });
    }

    function nextImage() {
        index = (index + 1) % totalImages;
        showImage(index);
    }

    setInterval(nextImage, 2000);
    showImage(index);
});
