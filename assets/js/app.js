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

// trust section automatic marquee
function initTrustMarquee() {
  if (typeof gsap === "undefined") return;

  const tracks = document.querySelectorAll(".trust-track");
  if (!tracks.length) return;

  let activeTweens = [];

  function buildTrack(track) {
    const originals = Array.from(track.children).filter(
      (node) => node.getAttribute("data-clone") !== "true"
    );
    if (!originals.length) return;

    track
      .querySelectorAll("[data-clone='true']")
      .forEach((clone) => clone.remove());

    originals.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("data-clone", "true");
      clone.setAttribute("aria-hidden", "true");
      clone
        .querySelectorAll("a, button, input, textarea, select")
        .forEach((el) => el.setAttribute("tabindex", "-1"));
      track.appendChild(clone);
    });

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.gap || trackStyles.columnGap || "0");
    const distance =
      originals.reduce(
        (total, item) => total + item.getBoundingClientRect().width,
        0
      ) + gap * Math.max(originals.length - 1, 0);

    if (!distance) return;

    const direction = track.dataset.direction === "right" ? "right" : "left";
    const duration = Number(track.dataset.duration || 16);
    const startX = direction === "right" ? -distance : 0;
    const endX = direction === "right" ? 0 : -distance;
    const wrapX = gsap.utils.wrap(-distance, 0);

    gsap.set(track, { x: startX });

    activeTweens.push(
      gsap.to(track, {
        x: endX,
        duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (value) => `${wrapX(parseFloat(value))}px`,
        },
      })
    );
  }

  function setupMarquee() {
    activeTweens.forEach((tween) => tween.kill());
    activeTweens = [];
    tracks.forEach((track) => buildTrack(track));
  }

  setupMarquee();

  let resizeTimeout = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setupMarquee, 180);
  });
}

// trust section quick stats counter
function initTrustCounters() {
  if (typeof gsap === "undefined") return;

  const counters = document.querySelectorAll(".trust-count");
  if (!counters.length) return;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || "";
    const decimals = Number(counter.dataset.decimals || 0);
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: function () {
        const currentValue =
          decimals > 0 ? state.value.toFixed(decimals) : Math.floor(state.value);
        counter.textContent = `${currentValue}${suffix}`;
      },
      onComplete: function () {
        const finalValue = decimals > 0 ? target.toFixed(decimals) : `${target}`;
        counter.textContent = `${finalValue}${suffix}`;
      },
    });
  });
}

initTrustMarquee();
initTrustCounters();

});
