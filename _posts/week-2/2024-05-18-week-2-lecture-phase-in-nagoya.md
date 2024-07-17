---
layout: default
title: "Week 2 - Lecture phase in Nagoya!"
date: 2024-05-18
permalink: /blog/week-2-lecture-phase-in-nagoya/
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
    var imageFiles = ['week2 (1).webp', 'week2 (2).webp', 'week2 (3).webp', 'week2 (4).webp', 'week2 (5).webp', 'week2 (6).webp', 'week2 (7).webp', 'week2 (8).webp', 'week2 (9).webp', 'week2 (10).webp', 'week2 (11).webp', 'week2 (12).webp', 'week2 (13).webp', 'week2 (14).webp', 'week2 (15).webp', 'week2 (16).webp', 'week2 (17).webp']; // Add more as needed

    // Reference to the gallery container
    var galleryContainer = document.getElementById('imageGallery');

    // Loop through image files and generate HTML
    imageFiles.forEach(function(fileName) {
        var imagePath = 'https://raw.githubusercontent.com/to3b/cranesntrains/main/_posts/week-2/' + fileName; // Adjust the path as necessary
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
こんにちは！During our 1st offical week of lectures, OSAKA DTS travelled to Nagoya to do this week's lectures with SAKURA DTS and YOKOHAMA DTS. We stayed in a hotel that had been abandoned for a while. We couldn't flush toilet paper down some toilets, and had to be creative about showering because of the limited amount of water. But the view from our bedroom (with tatami mats, and using futons as beds) was so beautiful! I had my first onsen experience, which I enjoyed! And a big pink church near the hotel allowed us to use their showers. It felt a bit like we were on Outreach! 

The speaker for this week was Edwin Fillie (South African), and he taught us about 'God's heart for the nations.' One of my takeaways was that God loves you, your personality, feelings, culture etc. and that is a valuable message when reaching out to others, especially those who don't know Jesus personally yet. Also, our purpose in spreading the gospel ('Jesus is Lord') is not to change the culture of the nation into our own culture, but embracing the uniqueness of the culture we are going into. At the end of the week, Edwin taught us an African dance, and then each nation came forward to show the others a dance from their culture. We had 17 different nations represented there!

While we were in Nagoya city, we explored Nagoya Castle, got ice cream, and I found a four leaf clover! I've enjoyed connecting with and getting to know the other DTS students during this time!

On to week 3 - starting "normal" lecture phase! :)
