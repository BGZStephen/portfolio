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
  [ `Recipe Book AngularJS Application`,
    `work-samples/angular-recipe-book-app/index.html`,
    `img/portfolio-recipe-book.png`,
    `https://github.com/BGZStephen/angular-udemy/tree/master/recipe-book`,
    `A single page application based upon a Recipe Book, you can add, edit, and delete recipes which will be stored on a Firebase NoSQL database. Tech used: Angular(4.0), HTML 5, CSS 3, Bootstrap, Firebase NoSQL DB`
  ],
  [ `zerif theme build`,
    `work-samples/zerif-theme/index.html`,
    `img/portfolio-zerif.png`,
    `https://github.com/BGZStephen/zerif-rebuild`,
    `A front-end build based on the popular Zerif theme design. built using HTML 5, CSS 3, OO JavaScript (menu toggles), Jquery (Slick / Smooth scrolling), Sass. Fully responsive.`
  ],
  [ `illdy theme build`,
    `work-samples/illdy/index.html`,
    `img/portfolio-illdy.png`,
    `https://github.com/BGZStephen/illdy-theme`,
    `A clean, responsive front-end, built from the ground up with HTML 5, CSS 3, Sass jQuery (Slick carousel / smooth scrolling).`
  ],
  [ `Agency Site build`,
    `work-samples/agency-site/index.html`,
    `img/agency-portfolio.png`,
    `https://github.com/BGZStephen/portfolio/tree/master/work-samples/agency-site`,
    `A mock-up for a digital agency site comprising services, portfolio, about, team & contact`
  ],
  [ `Start Bootstrap theme build`,
    `work-samples/start-bootstrap-theme/index.html`,
    `img/start-bootstrap-theme.png`,
    `https://github.com/BGZStephen/start-bootstrap-theme`,
    `A build based on a Bootstrap theme, built from the ground up with HTML 5, CSS 3, Sass & vanilla JS.`
  ],
  [ `Deliveroo build`,
    `work-samples/deliveroo/index.html`,
    `img/deliveroo.png`,
    `https://github.com/BGZStephen/portfolio/tree/master/work-samples/deliveroo`,
    `A rebuild of the deliveroo site, made to be responsive`
  ],
  [ `SaaS site re-build`,
    `work-samples/saas-site/index.html`,
    `img/portfolio-saas.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/saas%20site`,
    `SaaS Site rebuild based on LoyaltyLion (start-up)`
  ],
  [ `FieldMargin responsive build`,
    `work-samples/fieldmargin/index.html`,
    `img/portfolio-fieldmargin.png`,
    `https://github.com/BGZStephen/portfolio/tree/master/work-samples/fieldmargin`,
    `Fully responsive mock-up, based on the original Fieldmargin site.`
  ],
  [ `Forty responsive build`,
    `work-samples/forty/index.html`,
    `img/portfolio-forty.png`,
    `https://github.com/BGZStephen/mock-ups/tree/master/forty`,
    `Responsive single page theme, re-built from scratch by me.`
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
  ],
  [ `JavaScript Calculator`,
    `code-lab/javascript-calculator/index.html`,
    `img/javascript-calculator.png`,
    `https://github.com/BGZStephen/javascript-calculator`,
    `A JavaScript Calculator built from scratch without the use of a tutorial`
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
              <a href="` + code + `" target="_blank"><p class="overlay-links-p">CODE</p></a>
              <a href="` + url + `" target="_blank"><p class="overlay-links-p">VISIT</p></a>
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
