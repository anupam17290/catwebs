/* =====================================
   LIFECARE HOSPITAL
   MASTER JAVASCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeCounters();
    initializeRevealAnimations();
    initializeBackToTop();
    initializeFormHandling();

});

/* =====================================
   COUNTER ANIMATION
===================================== */

function initializeCounters() {

    const counters = document.querySelectorAll(
        ".stat h2, .stat-card h3"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;

            const text = element.innerText;

            const number = parseInt(
                text.replace(/\D/g, "")
            );

            if (isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(
                number / 100
            );

            const timer = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(timer);

                }

                if (text.includes("Lakh")) {

                    element.innerText =
                        current + " Lakh+";

                }

                else if (text.includes("+")) {

                    element.innerText =
                        current + "+";

                }

                else {

                    element.innerText =
                        current;

                }

            }, 20);

            observer.unobserve(element);

        });

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* =====================================
   SCROLL REVEAL
===================================== */

function initializeRevealAnimations() {

    const elements = document.querySelectorAll(
        ".card, .doctor-card, .doctor-profile, .stat, .stat-card"
    );

    elements.forEach(element => {

        element.classList.add("hidden-reveal");

    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "show-reveal"
                );

            }

        });

    }, {

        threshold: 0.1

    });

    elements.forEach(element => {

        observer.observe(element);

    });

}

/* =====================================
   FORM SUBMISSION
===================================== */

function initializeFormHandling() {

    const forms = document.querySelectorAll("form");

    forms.forEach(form => {

        form.addEventListener("submit", event => {

            event.preventDefault();

            alert(
                "Demo Website: Appointment Request Submitted Successfully."
            );

            form.reset();

        });

    });

}

/* =====================================
   BACK TO TOP
===================================== */

function initializeBackToTop() {

    const button = document.createElement("button");

    button.innerHTML = "↑";

    button.id = "backToTop";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            button.classList.add("show");

        }

        else {

            button.classList.remove("show");

        }

    });

}

/* =====================================
   FLOATING WHATSAPP BUTTON
===================================== */

const whatsappButton = document.createElement("a");

whatsappButton.href =
    "https://wa.me/918076455953";

whatsappButton.target = "_blank";

whatsappButton.className =
    "floating-whatsapp";

whatsappButton.innerHTML = "💬";

document.body.appendChild(
    whatsappButton
);

/* =====================================
   NAVBAR SHADOW
===================================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector("nav");

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.12)";

    }

    else {

        navbar.style.boxShadow =
            "0 4px 20px rgba(0,0,0,.05)";

    }

});

/* =====================================
   ACTIVE NAVIGATION
===================================== */

const links =
document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => {

            item.classList.remove("active-nav");

        });

        link.classList.add("active-nav");

    });

});
