// இந்த கோட், HTML பக்கம் முழுவதுமாகத் தயாரான பிறகுதான் இயங்கும்
document.addEventListener('DOMContentLoaded', function() {

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

  // ------------------ Gmail Icon Logic ------------------
  const mailIcon = document.getElementById('mailIcon');
  if (mailIcon) {
    mailIcon.addEventListener('click', function(event) {
      event.preventDefault(); 
      const recipientEmail = 'jegadeshram28505@gmail.com'; // உங்கள் சரியான மின்னஞ்சல்
      const subject = 'Inquiry from Website';
      const body = 'Hello, I would like to know more.';
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } else {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
      }
    });
  }
});


// --- இந்த கோட் வெளியே இருக்கலாம், அதனால் பிரச்சினை இல்லை ---

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
