gsap.registerPlugin(ScrollTrigger);

const slides = document.querySelectorAll(".slide");
slides.forEach((slide) => {
  const h3Reveal = slide.querySelector(".h3-reveal");
  const h5Reveal = slide.querySelector(".h5-reveal");
  const reveal = slide.querySelector(".reveal");
  // "to" tween (animate to provided values)
  gsap.to(h3Reveal, {
    // selector text, Array, or object
    x: "60%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: h3Reveal, // selector or element
      start: "top 80%", // [trigger] [scroller] positions
      end: "top 10%",
      // [trigger] [scroller] positions
      // markers: true, // only during development!
      toggleActions: "play reverse play reverse",
    },
    duration: 0.75, // seconds
    ease: "power2.inOut",
  });
  gsap.to(h5Reveal, {
    // selector text, Array, or object
    x: "70%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: h5Reveal, // selector or element
      start: "top 80%", // [trigger] [scroller] positions
      end: "top 10%", // [trigger] [scroller] positions
      // markers: true, // only during development!
      toggleActions: "play reverse play reverse",
    },
    duration: 0.75, // seconds
    delay: 0.3,
    ease: "power1.inOut",
  });
  gsap.to(reveal, {
    // selector text, Array, or object
    x: "90%", // any properties (not limited to CSS)
    scrollTrigger: {
      trigger: reveal, // selector or element
      start: "top 80%", // [trigger] [scroller] positions
      // end: "top 10%",
      // end: "top top",
      // markers: true, // only during development!
      toggleActions: "play reverse play reverse",
    },
    duration: 1, // seconds
    delay: 0.3,
    ease: "power3.inOut",
  });
});
