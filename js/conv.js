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
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBOztFQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsUUFBQSxDQUFBLENBQUE7V0FDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBeEIsQ0FBNEIsaUJBQTVCO0VBRDRDLENBQTlDOztFQUdBLEtBQUEsR0FBUSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsVUFBMUI7O0VBQ1IsT0FBQSxHQUFVLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTixHQUFlLENBQWhCOztBQUVmO0VBQUEsS0FBQSxxQ0FBQTs7SUFDRSxPQUFPLENBQUMsZ0JBQVIsQ0FBeUIsS0FBekIsRUFBZ0MsUUFBQSxDQUFBLENBQUE7YUFDOUIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBeEIsQ0FBNEIsYUFBNUI7SUFEOEIsQ0FBaEM7RUFERjs7RUFJQSxHQUFBLEdBQU0sSUFBSSxLQUFKLENBQUE7O0VBQ04sR0FBRyxDQUFDLE1BQUosR0FBYSxRQUFBLENBQUEsQ0FBQTtXQUNYLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQXhCLENBQTRCLGNBQTVCO0VBRFc7O0VBRWIsR0FBRyxDQUFDLEdBQUosR0FBVSxnQkFBQSxDQUFpQixRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsQ0FBakIsQ0FBNkQsQ0FBQyxlQUFlLENBQUMsS0FBOUUsQ0FBb0YsQ0FBcEYsRUFBdUYsQ0FBQyxDQUF4RixDQUEwRixDQUFDLE9BQTNGLENBQW1HLElBQW5HLEVBQXlHLEVBQXpHO0FBYlYiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyIFwiRE9NQ29udGVudExvYWRlZFwiLCAtPlxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZC1kb2N1bWVudCcpXG5cbnRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRleHQtaW4nKVxuZWxlbWVudCA9IHRleHRzW3RleHRzLmxlbmd0aCAtIDFdXG5cbmZvciBldmVudCBpbiBbJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCdvVHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ21zVHJhbnNpdGlvbkVuZCddXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciBldmVudCwgLT5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3RpbWUtaXMtb3V0JykgIFxuICBcbmltZyA9IG5ldyBJbWFnZSgpXG5pbWcub25sb2FkID0gLT5cbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2FkZWQtaW1hZ2UnKVxuaW1nLnNyYyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtaW1hZ2UnKSkuYmFja2dyb3VuZEltYWdlLnNsaWNlKDQsIC0xKS5yZXBsYWNlKC9cIi9nLCBcIlwiKVxuXG4iXX0=
  //# sourceURL=coffeescript