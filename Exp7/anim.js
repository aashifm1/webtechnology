const images = ['image1.jpg', 'image2.jpg','image3.jpg','image4.jpg'];
let currentIndex = 0;
const imgElement = document.getElementById('pro-img');

function changeImage() {
    imgElement.style.opacity = 0; // Start fading out
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex]; // Change the source
        imgElement.style.opacity = 1; // Fade in after change
    }, 1000); // Wait for the fade-out transition
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

// Initial calls
setInterval(changeImage, 5000); // Change image every 5 seconds
setInterval(updateTime, 1000); // Update clock every second

// Set initial clock display
updateTime();
