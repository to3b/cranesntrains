---
layout: default
title: "Week 11 - Lordship"
date: 2024-07-20
permalink: /blog/week-11-lordship/
---
# [Home](/) - [Media](/media.html) - [Contact](/contact.html)
---
<div id="imageGallery"></div>

<script>
$(document).ready(function() {
  $('[data-fancybox="gallery"]').fancybox({
    loop: true, // Enable infinite loop (circular navigation)
    buttons: [
      "zoom",
      "slideShow",
      "fullScreen",
      "thumbs",
      "close"
    ],
    animationEffect: "fade", // Transition effect
    transitionDuration: 500, // Duration of the transition
    keyboard: true // Enable keyboard navigation (arrows)
  });
});

    // Array of image file names (replace with your actual file names)
    var imageFiles = ["week11 (1).png", "week11 (2).png", "week11 (3).png", "week11 (4).png", "week11 (5).png", "week11 (6).png", "week11 (7).png", "week11 (8).png"]; // Add more as needed

    // Reference to the gallery container
    var galleryContainer = document.getElementById('imageGallery');

    // Loop through image files and generate HTML
    imageFiles.forEach(function(fileName) {
        var imagePath = 'https://raw.githubusercontent.com/to3b/cranesntrains/main/_posts/week-11/' + fileName; // Adjust the path as necessary
        var caption = 'Image ' + fileName; // You can set dynamic captions here
        
        // Create <a> tag for each image
        var link = document.createElement('a');
        link.href = imagePath;
        link.setAttribute('data-fancybox', 'gallery'); // If using Fancybox or similar lightbox

        // Create <img> tag for each image
        var image = document.createElement('img');
        image.src = imagePath;
        image.alt = caption;

        // Append <img> to <a>
        link.appendChild(image);

        // Append <a> to gallery container
        galleryContainer.appendChild(link);
    });
</script>
こんにちは！This week’s topic was ‘Lordship’ taught by Mark Parker. He talked about making
Jesus Lord of our lives, not only a historical figure or personal Saviour, but our Lord. We were
pushed out of our comfort zone. Friday was a 12-13 hour day of worship. I thought it was a good
time to reflect on what we had been learning.
We also had 2 baptisms in DTS this week! Joshua was baptised and Kailee wanted to be
baptised again. This was a special time for them both I think! They were baptised in a blowup
pool in the main room of the base. Some people helped fill the pool up by collecting water in big
pots and bowls from the kitchen!
On Saturday, Eliannah, Hana (my roommates) and I took the train to Kyoto to explore a little of
the traditional areas of Japan.
I’ve been making more Japanese friends lately! On Sunday after church we had lunch at a
Korean restaurant and went to an international store together. The Tim Tams are almost $6 a
pack!
Next week is our last week of Lecture Phase! And then we will be going to the Philippines on the
22nd of July! Week 12’s topic will be ‘the Holy Spirit.’ I’m looking forward to this week! またね！
