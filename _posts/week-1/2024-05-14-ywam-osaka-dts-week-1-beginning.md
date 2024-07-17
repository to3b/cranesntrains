---
layout: default
title: "YWAM OSAKA DTS Week 1 - Beginning!"
date: 2024-05-14
permalink: /blog/ywam-osaka-dts-week-1-beginning/
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
    var imageFiles = ['week1.webp']; // Add more as needed

    // Reference to the gallery container
    var galleryContainer = document.getElementById('imageGallery');

    // Loop through image files and generate HTML
    imageFiles.forEach(function(fileName) {
        var imagePath = 'https://raw.githubusercontent.com/to3b/cranesntrains/main/_posts/week-1/' + fileName; // Adjust the path as necessary
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
こんにちは！Week 1 & 2 have passed, and I thought I’d give you an update! 

For week 1, I arrived Sunday night (28th April 2024) at the YWAM base in Kanmaki with my dad and cousin Steven. Before arriving, we spent 5 days together in Japan exploring, visiting my Japanese family in Kohoku, Saga, and enjoying a road trip to Kanmaki, Osaka from Kohoku, Saga. 

This first week was orientation! So getting to know each DTS staff member and student (there are 12 DTS students altogether, 6 girls and 6 guys.), hearing each others testimony of faith in Jesus, learning what life in Japan and on base may be like (discussing cultural differences, homework and work duties on base etc.). There was lots to learn! :)

On the weekend, I got to experience Japanese church for the first time! I was very excited!! My friends and I decided to go to a international Baptist church that took a few train stops to get to. Then afterwards my friends Eliannah and Camila, and I decided to get lunch from a restaurant across the road from the building the church was in. I don’t think they get many foreigners because one of the ladies working there wrote us a note in English :) (photo above). The food was delicious there! 

YWAM OSAKA DTS includes tracks as a lesson each week (there is a general track about spiritual practices, a sports track, and a art track). I chose the art track!! So apart of this was going to a few aart and stationary stores to get a sketch book, pencils and erasers. I’m looking forward to this starting! We are also reading a book called ‘Art for God’s sake.’


I enjoyed this week of orientation! And now we are moving to Nagoya for next week to do lecture phase with YWAM Sakura and YWAM Yokohama! Something new again!
