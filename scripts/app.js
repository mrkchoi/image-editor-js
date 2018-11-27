// DOM Elements
let brightness = document.querySelector('#controls__brightness');
let contrast = document.querySelector('#controls__contrast');
let saturation = document.querySelector('#controls__saturation');
let opacity = document.querySelector('#controls__opacity');
let blur = document.querySelector('#controls__blur');
let sepia = document.querySelector('#controls__sepia');
let invert = document.querySelector('#controls__invert');
let hueRotate = document.querySelector('#controls__huerotate');

const controls = document.querySelector('.controls__elements');
const controlSliders = document.querySelectorAll('.controls__slider');
const image = document.querySelector('.img');
let urlForm = document.querySelector('.controls__input');
let reset = document.querySelector('.controls__header--reset');
let randomImgBtn = document.querySelector('.controls__input--btn-random');


// Event listeners
controlSliders.forEach(slider => {
    slider.addEventListener('input', sliderChange);
});
urlForm.addEventListener('submit', customImage);
randomImgBtn.addEventListener('click', newImage);
reset.addEventListener('click', resetValues);

// Project init
(function init() {
    getRandomImage();
})();

// Refresh DOM with random image from unsplash API
function newImage() { 
    window.location.reload();
}

// Init random image
function getRandomImage() {
    image.style.backgroundImage = `url('https://source.unsplash.com/random/1500x1000')`;
    // https://source.unsplash.com/random/1500x1000
}

// Custom image based on URL input
function customImage(e) {
    e.preventDefault();
    let customURL = e.target.querySelector('.controls__url--input').value;
    image.style.backgroundImage = `url('${customURL}')`;
}

// Update the image
function sliderChange(e) {
        image.style.filter = `brightness(${brightness.value}%) contrast(${contrast.value}%) saturate(${saturation.value}%) blur(${blur.value}px) sepia(${sepia.value}%) invert(${invert.value}%) opacity(${opacity.value}%) hue-rotate(${hueRotate.value}deg)`;
}

// Reset all values
function resetValues() {
    // Update DOM
    brightness.value = '100';
    contrast.value = '100';
    saturation.value = '100';
    opacity.value = '100';
    blur.value = '0';
    sepia.value = '0';
    invert.value = '0';
    hueRotate.value = '0';

    // Update CSS
    image.style.filter = `brightness(${brightness.value}%) contrast(${contrast.value}%) saturate(${saturation.value}%) blur(${blur.value}px) sepia(${sepia.value}%) invert(${invert.value}%) opacity(${opacity.value}%) hue-rotate(${hueRotate.value}deg)`;
}
