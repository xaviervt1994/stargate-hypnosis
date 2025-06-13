console.log("Script loaded!");

// In script.js or main.js
import "../css/style.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Smooth scrolling setup
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize smoother
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  effects: true,
});

// Wait for DOM to fully load
window.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");

  if (!prevBtn || !nextBtn || testimonials.length === 0) {
    console.warn("Buttons or testimonials missing");
    return;
  }

  let current = 0;

  function show(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    show(current);
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % testimonials.length;
    show(current);
  });

  show(current); // Show initial
});

// Fade-in sections
gsap.utils.toArray(".fade-in").forEach((elem) => {
  gsap.fromTo(
    elem,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Pinned storytelling section
gsap.to(".pin-content", {
  scrollTrigger: {
    trigger: ".pin-section",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 1,
    anticipatePin: 1, // helps reduce jumpiness
  },
  opacity: 1,
  duration: 1,
});

// Hero float-in animation
gsap.fromTo(
  ".hero-content h1",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: "power2.out",
    delay: 0.3,
  }
);

// Animate split sections
gsap.utils.toArray(".split").forEach((section) => {
  const image = section.querySelector(".split-image");
  const text = section.querySelector(".split-text");

  gsap.fromTo(
    image,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );

  gsap.fromTo(
    text,
    { opacity: 0, x: 100 },
    {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
});

// Background reveal section
gsap.fromTo(
  ".bg-reveal-content",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bg-reveal-section",
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  }
);
