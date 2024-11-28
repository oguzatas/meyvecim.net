// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
  showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 5000);

// Smooth Scroll
const links = document.querySelectorAll(".nav-links a");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60, // Adjust for fixed navbar
      behavior: "smooth",
    });
    // Close the nav menu on mobile after clicking
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    }
  });
}
