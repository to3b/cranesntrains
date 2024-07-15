---
layout: default
title: "Week 9 - Jesus week!"
date: 2024-07-15
permalink: /blog/week-9-jesus-week/
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
    var imageFiles = ['week9 (2).png', 'week9 (3).png', 'week9 (4).png', 'week9 (5).png', 'week9 (6).png', 'week9 (7).png', 'week9 (8).png', 'week9 (9).png']; // Add more as needed

    // Reference to the gallery container
    var galleryContainer = document.getElementById('imageGallery');

    // Loop through image files and generate HTML
    imageFiles.forEach(function(fileName) {
        var imagePath = 'https://raw.githubusercontent.com/to3b/to3b.github.io/main/_posts/week-8/' + fileName; // Adjust the path as necessary
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
こんにちは！We have completed week 9: Jesus week! This week’s speaker was Plamena
Williamson. She is a missionary here in Japan with her family. She is teaching another school
here at the Takatsuki YWAM base. She also speaks many languages, so we had one lecture
taught in Japanese!

At the start of the week, Plamena talked about how to reach the Japanese people with Jesus.
She taught us that the word sin (罪ー＞つみ）also means crime. The Japanese are always trying
to do good, so coming from the angle that they are sinners in need of a Saviour Jesus, may
come across as us telling them they are criminals, though they believe that they are a good
person for their good acts. So this angle may not help the Japanese understand who God truly
is. So we need to think about: why do the Japanese need to know about Jesus? And what kind
of difference will it make in their life if they choose to follow Jesus now?
The photos are of things I did this week. I’ve been learning how to make onigiri, so I was testing
out my new onigiri mold.

On Tuesday, some of the DTS girls went to a beautiful river in the forest not far from where we
live! I want to go back!! Though the water was icy cold! It’s summer in Japan at the moment, so
going there was so nice. The views walking there were amazing too!
On Saturday, some of us celebrated Kunie san’s birthday by going out for dinner. Kunie san
helps us with grocery shopping and cooking at YWAM. In Japan, we say ‘san’ (said like ‘sun’)
after people’s names, generally, though there are other words for different contexts (like if
someone is younger than you etc.)

For week 10, we have multiple staff members from Takatsuki YWAM base speaking on Spiritual
Warfare. またね！
