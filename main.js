/** Show menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove menu mobile */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ADD BLUR HEADER */
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/* Email JS */
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publickey
    emailjs.sendForm("service_pqz5u0f", "template_qrwonuc", "#contact-form", "8JVsLybB7_ywCC_7c").then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
  };

  contactForm.addEventListener("submit", sendEmail);
});

/* Scroll Up Button */
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height
  window.scrollY >= 350 ? scrollUpButton.classList.add("show-scroll") : scrollUpButton.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* Scroll sections active link */

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 8;
    const sectionId = current.getAttribute("id");
    const sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal ({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal('.home__data, .experience, .skills, .contact__container')
sr.reveal('.home__img', {delay: 600})
sr.reveal('.home__scroll', {delay: 800})
sr.reveal('.work__card, .services__card', {iterval: 100})
sr.reveal('.about__content', {origin: 'right'})
sr.reveal('.about__img', {origin: 'left'})

