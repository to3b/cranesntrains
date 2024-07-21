// Select all img elements that do not have the class 'fancybox-image'
const images = document.querySelectorAll('img:not(.fancybox-image)');

// Filter the images to find those with equal height and width
const squareImages = Array.from(images).filter(image => image.height === image.width);

// Loop through the filtered images and perform your desired action
squareImages.forEach(image => {
    // Your code here, e.g., add an event listener, change an attribute, etc.
    console.log(image); // Example action: log each image element with equal height and width
});
