/**
 * CATWEBS ENTERPRISE SCRIPT
 * Lightweight, zero-dependency logic for agency UI.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Logic
    const menuTrigger = document.querySelector('.mobile-menu-trigger');
    const navLinks = document.querySelector('.nav-links');

    if (menuTrigger && navLinks) {
        menuTrigger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Optional: Animate hamburger lines into an X
            const lines = menuTrigger.querySelectorAll('.hamburger-line');
            if (navLinks.classList.contains('active')) {
                lines[0].style.transform = 'translateY(4px) rotate(45deg)';
                lines[1].style.transform = 'translateY(-4px) rotate(-45deg)';
            } else {
                lines[0].style.transform = 'none';
                lines[1].style.transform = 'none';
            }
        });
    }

    // 2. High-End Scroll Reveal Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.bento-item, .solution-block, .project-block, .standard-item, .process-step');

    // Add initial state class to elements
    fadeElements.forEach(el => el.classList.add('fade-up'));

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => scrollObserver.observe(el));

    // 3. Optional: Form Submission Simulation for the Contact Page
    const contactForm = document.querySelector('.enterprise-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Remove e.preventDefault() when you connect Web3Forms/Formspree.
            // e.preventDefault(); 
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Initializing...";
            btn.style.opacity = "0.8";
            
            // Simulating network request delay
            setTimeout(() => {
                btn.innerText = "Request Sent Successfully";
                btn.style.background = "#2ea043"; // Success green
                btn.style.color = "#ffffff";
            }, 1500);
        });
    }
});
