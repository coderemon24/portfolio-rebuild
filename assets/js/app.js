$(function () {
  // hero section hover effect
  let self_shape = $(".self_shape");
  let self_details = $(".self_details");
  let self_name = $(".self_name");

  self_shape.mouseenter(function () {
    self_details.removeClass("invisible opacity-0");
    self_name.addClass("invisible opacity-0");
  });

  self_shape.mouseleave(function () {
    self_details.mouseenter(function () {
      self_details.removeClass("invisible opacity-0");
      self_name.addClass("invisible opacity-0");
    });

    self_details.mouseleave(function () {
      self_details.addClass("invisible opacity-0");
      self_name.removeClass("invisible opacity-0");
    });

    self_details.addClass("invisible opacity-0");
    self_name.removeClass("invisible opacity-0");
  });

  // on hover show mega card
  let mega_view = $(".mega_view");
  let meta_card = $(".meta_card");
  let deviceWidth = $(window).width();

  if (deviceWidth < 992) {
    mega_view.mouseenter(function () {
      meta_card
        .removeClass("top-100 invisible opacity-0")
        .addClass("-top-100 visible opacity-100");
    });

    mega_view.mouseleave(function () {
      meta_card.mouseenter(function () {
        meta_card
          .removeClass("top-100 invisible opacity-0")
          .addClass("-top-100 visible opacity-100");
      });

      meta_card.mouseleave(function () {
        meta_card
          .addClass("top-100 invisible opacity-0")
          .removeClass("-top-100 visible opacity-100");
      });
      meta_card
        .addClass("top-100 invisible opacity-0")
        .removeClass("-top-100 visible opacity-100");
    });
  }
  
 // footer year update
document.getElementById("year").innerHTML = new Date().getFullYear();

// author info quotes
let quotes = [
  "❝ Simplifying Complexity. Delivering Seamless Web Experiences. ❞",
  "❝ Crafting Digital Stories with Code and Creativity. ❞",
  "❝ Transforming Ideas into Interactive Realities. ❞",
  "❝ Where Innovation Meets Functionality in Web Design. ❞",
  "❝ Building Bridges Between Users and Digital Worlds. ❞",
];

let index = 0;
let intervalId = null;
let quoteEl = document.getElementById("quotes");

// show first quote
quoteEl.innerHTML = quotes[index];

// function to start quote rotation
function startQuoteRotation() {
  intervalId = setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteEl.innerHTML = quotes[index];
  }, 3000);
}

// stop rotation
function stopQuoteRotation() {
  clearInterval(intervalId);
}

// hover events
quoteEl.addEventListener("mouseenter", stopQuoteRotation);
quoteEl.addEventListener("mouseleave", startQuoteRotation);

// start initially
startQuoteRotation();

  
});
