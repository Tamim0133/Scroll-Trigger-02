gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  const h3Reveal = slide.querySelector(".h3-reveal");
  const h5Reveal = slide.querySelector(".h5-reveal");
  const reveal = slide.querySelector(".reveal");
  // "to" tween (animate to provided values)
  gsap.to(h3Reveal, {
    // selector text, Array, or object
    x: "200%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: h3Reveal, // selector or element
      start: "top 30%", // [trigger] [scroller] positions
      end: "bottom bottom", // [trigger] [scroller] positions
      // markers: true, // only during development!
      toggleActions: "play none resume reverse",
    },
    duration: 1, // seconds
    ease: "power2.inOut",
  });
  gsap.to(h5Reveal, {
    // selector text, Array, or object
    x: "150%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: h5Reveal, // selector or element
      start: "top 30%", // [trigger] [scroller] positions
      end: "bottom bottom", // [trigger] [scroller] positions
      // markers: true, // only during development!
      toggleActions: "play none resume reverse",
    },
    duration: 1, // seconds
    delay: 0.2,
    ease: "power1.inOut",
  });
  gsap.to(reveal, {
    // selector text, Array, or object
    x: "120%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: reveal, // selector or element
      start: "top 30%", // [trigger] [scroller] positions
      end: "bottom bottom", // [trigger] [scroller] positions
      // markers: true, // only during development!
      toggleActions: "play none reverse reverse",
    },
    duration: 1, // seconds
    delay: 0.4,
    ease: "power3.inOut",
  });
});
