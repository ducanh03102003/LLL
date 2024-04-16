// Function to fade in text
function fadeIn() {
    var text = $('.content').text().replace(/^\s+|\s+$/g, '');
    var length = text.length;
    var i = 0;
    var txt;
    var html = [];
    var sp = 4;
    for (; i < length; i += sp) {
        txt = text.substring(i, i + sp);
        html.push('<span class="c animated">' + txt + '</span>');
    }
    $('.content').removeClass('c').html(html.join(''));

    for (i = 0, length = html.length; i < length; i++) {
        !function (i) {
            setTimeout(function () {
                $('.content').find('.animated').eq(i).addClass('fadeIn');
            }, i * 400);
        }(i);
    }
};

// Function to change images every 3 seconds
function changeImage() {
    var imageUrls = [
        'Image/image1.JPG',
        'Image/image2.JPG',
        'Image/image3.JPG',
        'Image/image4.JPG',
        'Image/image5.JPG',
        'Image/image6.JPG',
        'Image/image7.JPG',
        'Image/image8.JPG'
        // Add more image URLs as needed
    ];
    var currentImageIndex = 0;

    setInterval(function () {
        document.getElementById('image-container').src = imageUrls[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }, 3000); // Change image every 3 seconds
}

// Function to handle page load
function handlePageLoad() {
    // Trigger animations and audio playback when the content is clicked
    document.querySelector(".content").onclick = () => {
        document.querySelector("#heart").hidden = false;
        document.querySelector("body").style.backgroundColor = "#542246";
        document.querySelector("#heart").hidden = false;
        fadeIn();

        // If not, play the audio
        var audio = new Audio('BaoThi.mp3');
        audio.play();
        localStorage.setItem('audioPlayed', true);
    }
}

// Call the function to handle page load
handlePageLoad();

// Automatically trigger fadeIn function and audio playback when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#heart").hidden = false;
    document.querySelector("body").style.backgroundColor = "#542246";
    document.querySelector("#heart").hidden = false;
    fadeIn();

    // Check if audio has been played before
    var audioPlayed = localStorage.getItem('audioPlayed');
    if (!audioPlayed) {
        // If not, play the audio
        var audio = new Audio('BaoThi.mp3');
        audio.play();
        localStorage.setItem('audioPlayed', true);
    }

    // Start the image slideshow
    changeImage();
});
