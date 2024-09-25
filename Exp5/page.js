    const images=['image1.jpg','image2.jpg'];
    let currentIndex = 0;
    function changeImage(){
        const imgElement = document.getElementById('profileimg');
        currentIndex=(currentIndex+1)%images.length;
        imgElement.src=images[currentIndex];
    }
    setInterval(changeImage,5000);

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('time').textContent = timeString;
    }
    setInterval(updateTime, 1000); 
    updateTime();