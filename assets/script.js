// Select all img elements that do not have the class 'fancybox-image'
const images = document.querySelectorAll('img:not(.fancybox-image)');

// Loop through each image and set the height to the width
images.forEach(image => {
    image.height = image.width;
});
