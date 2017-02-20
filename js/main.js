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

// work examples builder //

// arrays for both work samples and lab samples

const workExamples = [
  [ `Basic Portfolio`,
    `work-samples/aerial/index.html`,
    `img/portfolio-aerial.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/aerial`,
    `Simple, flat responsive build including social media icons`
  ],
  [ `e-Business Card`,
    `work-samples/e-business-card/index.html`,
    `img/portfolio-business-card.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/e-business%20card`,
    `Business card mock-up with social media links`
  ],
  [ `Forty Responsive build`,
    `work-samples/forty/index.html`,
    `img/portfolio-forty.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/forty`,
    `Responsive single page theme, re-built from scratch by me.`
  ],
  [ `Responsive blog post template`,
    `work-samples/future-imperfect/index.html`,
    `img/portfolio-future.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/future%20imperfect`,
    `Responsive blog post template which displays user author details and likes / shares / categories`
  ]
]

const labExamples = [
  [ `FizzBuzz`,
    `code-lab/fizzbuzz/index.html`,
    `img/fizzbuzz.png`,
    `https://github.com/BGZStephen/fizzbuzz`,
    `A classic coding challenge, FizzBuzz`
  ],
  [ `String Editor`,
    `code-lab/stringeditor/index.html`,
    `img/stringeditor.png`,
    `https://github.com/BGZStephen/string-editor`,
    `A simple application with multiple uses, it allows a user to enter a string and provides options for altering the string.`
  ],
  [ `Fibonacci Sequence`,
    `code-lab/fibonacci-sequence/index.html`,
    `img/fibonacci.png`,
    `https://github.com/BGZStephen/fibonacci-sequence`,
    `A simple app to display the first 100 iterations of the fibonacci sequence`
  ]
]

// builder function that takes pieces of the array, creates a concatenated string and appens to the end of the corresponding container

const workSamplesContainer = document.getElementById(`work-examples`) // set container for work samples
const labSamplesContainer = document.getElementById(`lab-examples`) // set container for lab samples

const examplesBuilder = (container, header, url, img, code, description) => {
  const workExamplesHTML = `
    <div class="work-example-container">
      <h3>` + header + `</h3>
        <div class="image-container">
          <a href="` + url + `" target="_blank"><img class="work-thumbnail" src=` + img + `></a>
          <div class="overlay">
            <div class="overlay-links">
              <a href="` + code + `" target="_blank"><p>CODE</p></a>
              <a href="` + url + `" target="_blank"><p>VISIT</p></a>
            </div>
          </div>
        </div>
      <p>` + description + `</p>
    </div>
  `
  container.insertAdjacentHTML(`beforeend`, workExamplesHTML)
}

// for loops to cycle over both work samples and lab samples arrays and call the examplesBuilder function to populate the page

  for(let i = 0; i < workExamples.length; i++) {
    let header = workExamples[i][0];
    let url = workExamples[i][1];
    let img = workExamples[i][2];
    let code = workExamples[i][3];
    let description = workExamples[i][4];
    examplesBuilder(workSamplesContainer, header, url, img, code, description);
  }

  for(let i = 0; i < labExamples.length; i++) {
    let header = labExamples[i][0];
    let url = labExamples[i][1];
    let img = labExamples[i][2];
    let code = labExamples[i][3];
    let description = labExamples[i][4];
    examplesBuilder(labSamplesContainer, header, url, img, code, description);
}

// end work examples builder

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

// end overlay
