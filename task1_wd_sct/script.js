// ==========================================================
// BYTEGUARD - SCRIPT.JS
// ==========================================================

/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/* ==========================
   NAVBAR SCROLL EFFECT
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ==========================
   TYPING ANIMATION
========================== */

const words = [

    "Learn Cybersecurity.",

    "Protect Your Identity.",

    "Fight Cyber Threats.",

    "Browse Safely Online.",

    "Create Strong Passwords.",

    "Stay One Step Ahead."

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
/* ==========================
   PASSWORD GENERATOR
========================== */

const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");

if (generateBtn && generatedPassword) {

    const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=<>?/";

    generateBtn.addEventListener("click", () => {

        let password = "";

        for (let i = 0; i < 14; i++) {

            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );

        }

        generatedPassword.value = password;

    });

}

/* ==========================
   PASSWORD STRENGTH
========================== */

const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthLevel");
const strengthText = document.getElementById("strengthText");

if (passwordInput && strengthBar && strengthText) {

    passwordInput.addEventListener("input", () => {

        const password = passwordInput.value;

        let strength = 0;

        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        if (strength === 0) {

            strengthBar.style.width = "0%";
            strengthBar.style.background = "#ef4444";
            strengthText.textContent = "Password Strength";

        } else if (strength === 1) {

            strengthBar.style.width = "25%";
            strengthBar.style.background = "#ef4444";
            strengthText.textContent = "Weak Password";

        } else if (strength === 2) {

            strengthBar.style.width = "50%";
            strengthBar.style.background = "#f59e0b";
            strengthText.textContent = "Medium Password";

        } else if (strength === 3) {

            strengthBar.style.width = "75%";
            strengthBar.style.background = "#22c55e";
            strengthText.textContent = "Strong Password";

        } else {

            strengthBar.style.width = "100%";
            strengthBar.style.background = "#38bdf8";
            strengthText.textContent = "Very Strong Password";

        }

    });

}

/* ==========================
   SCROLL REVEAL
========================== */

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {

    const trigger =
    window.innerHeight * 0.82;

    reveals.forEach(section => {

        const top =
        section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",
revealSections);

revealSections();

/* ==========================
   ANIMATED COUNTERS
========================== */

const counters =
document.querySelectorAll(".counter");

let started = false;

function runCounters() {

    if (started) return;

    const stats =
    document.querySelector(".statistics");

    const top =
    stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target =
            +counter.dataset.target;

            let count = 0;

            const speed =
            target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.textContent =
                    Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.textContent =
                    target;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll",
runCounters);

/* ==========================
   MOUSE GLOW
========================== */

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",

(e)=>{

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.addEventListener("click",

function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});

/* ==========================
   CONTACT FORM
========================== */

const form =
document.querySelector(".contact-form");

form.addEventListener("submit",

(e)=>{

e.preventDefault();

alert(

"🎉 Thank you for contacting ByteGuard!\n\nStay Safe Online 💙"

);

form.reset();

});