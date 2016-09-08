var current = 0;

var IMAGE_TIME = (typeof IMAGE_TIME === 'undefined') ? 10000 : IMAGE_TIME;
var PERCENT_OF_TIME_PER_FADE = (typeof PERCENT_OF_TIME_PER_FADE === 'undefined') ? 3.0/16.0 : PERCENT_OF_TIME_PER_FADE;
var FADE   = IMAGE_TIME * PERCENT_OF_TIME_PER_FADE;
var CLENCH = IMAGE_TIME * (0.9 - (2.0 * PERCENT_OF_TIME_PER_FADE));

function rotateImage(id, images) {
  if (images.length === 0) return;

  // Wait >> FadeIn >> Clench >> FadeOut
  $(id).delay(500)
       .fadeIn(FADE)
       .delay(CLENCH)
       .fadeOut(FADE)
       .css("display", "none")
       .prop('src', images[current]); // Change the image

  // Move to the next image or rotate to beginning
  current = (current + 1) % images.length;
}
