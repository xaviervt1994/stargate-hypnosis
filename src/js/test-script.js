window.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const nextBtn = document.getElementById("nextTestimonial");
  let current = 0;
  let isAnimating = false;

  function showTestimonial(index) {
    if (isAnimating || index === current) return;
    isAnimating = true;

    testimonials[current].classList.remove("active");

    setTimeout(() => {
      testimonials[index].classList.add("active");
      current = index;
      isAnimating = false;
    }, 200);
  }

  nextBtn.addEventListener("click", () => {
    const nextIndex = (current + 1) % testimonials.length;
    showTestimonial(nextIndex);
  });

  prevBtn.addEventListener("click", () => {
    const prevIndex = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(prevIndex);
  });
});
