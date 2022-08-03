(function() {
    var element, event, i, img, len, ref, texts;
  
    document.addEventListener("DOMContentLoaded", function() {
      return document.body.classList.add('loaded-document');
    });
  
    texts = document.querySelectorAll('.text-in');
  
    element = texts[texts.length - 1];
  
    ref = ['webkitTransitionEnd', 'oTransitionEnd', 'transitionend', 'msTransitionEnd'];
    for (i = 0, len = ref.length; i < len; i++) {
      event = ref[i];
      element.addEventListener(event, function() {
        return document.body.classList.add('time-is-out');
      });
    }
  
    img = new Image();
  
    img.onload = function() {
      return document.body.classList.add('loaded-image');
    };
  
    img.src = getComputedStyle(document.querySelector('.background-image')).backgroundImage.slice(4, -1).replace(/"/g, "");
  
  }).call(this);
