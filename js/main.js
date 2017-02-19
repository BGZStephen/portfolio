// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

// add overlay

const addOverlay = () => {
    const overlayDiv = document.querySelectorAll(`.image-container`)
      for(let i = 0; i < overlayDiv.length; i+= 1) {
        overlayDiv[i].addEventListener(`mouseenter`, () => {
            let overlay = overlayDiv[i].querySelector(`.overlay`);
            let overlayLinks = overlayDiv[i].querySelector(`.overlay-links`)
            overlay.style.height = `calc(100% - 4px)`;
            overlayLinks.style.visibility = `visible`;
            overlayLinks.style.opacity = `1`;
        })
        overlayDiv[i].addEventListener(`mouseleave`, () => {
            let overlay = overlayDiv[i].querySelector(`.overlay`);
            let overlayLinks = overlayDiv[i].querySelector(`.overlay-links`)
            overlay.style.height = `0%`;
            overlayLinks.style.visibility = `invisible`;
            overlayLinks.style.opacity = `0`;
      })
    }
  }

window.addEventListener('resize', () => {
  const bodyWidth = window.innerWidth;
  if(bodyWidth > `768`) {
    addOverlay();
  }
})

addOverlay();
