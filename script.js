// ------------------ Typing Effect ------------------
const typedText = document.querySelector(".typing-text");
if (typedText) {
  const words = ["Full Stack Developer 💻", "Web Enthusiast 🌐", "Creative Coder 🚀"];
  let wordIndex = 0;
  let charIndex = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[wordIndex];
    if (isDeleting) {
      typedText.textContent = currentWord.substring(0, charIndex--);
      if (charIndex < 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, 100);
      }
    } else {
      typedText.textContent = currentWord.substring(0, charIndex++);
      if (charIndex > currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else {
        setTimeout(type, 150);
      }
    }
  }
  type();
}

// ------------------ Smooth Scroll ------------------
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// ------------------ Scroll Animation ------------------
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// script.js
const contactForm = document.querySelector(".contact-form");

// 👇 இந்த if கண்டிஷனை சேர்க்கவும்
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Page reload prevent

    // Form data get panna
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Data object
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    console.log("Contact Form Data Submitted:", formData); // Console la display aagum
    alert("Form submitted! Check console.");

    contactForm.reset(); // Form fields clear panna
  });
} // 👈 if கண்டிஷனை இங்கே முடிக்கவும்
