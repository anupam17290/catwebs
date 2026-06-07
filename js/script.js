/* =====================================
   CATWEBS SCRIPT
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       FADE-UP ANIMATION
    ============================== */

    const fadeElements =
        document.querySelectorAll(
            ".fade-up,.fade-in"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add("show");
                    }

                });

            },
            {
                threshold:0.15
            }
        );

    fadeElements.forEach(el => {

        observer.observe(el);

    });

    /* ==============================
       ACTIVE NAVIGATION
    ============================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if(href === currentPage){

                link.classList.add("active");
            }

        });

    /* ==============================
       SMOOTH SCROLL
    ============================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function(e){

                    const target =
                        document.querySelector(
                            this.getAttribute("href")
                        );

                    if(target){

                        e.preventDefault();

                        target.scrollIntoView({

                            behavior:"smooth"

                        });

                    }

                }
            );

        });

    /* ==============================
       NAVBAR SHADOW ON SCROLL
    ============================== */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener(
        "scroll",
        () => {

            if(window.scrollY > 40){

                navbar.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,.08)";

            }else{

                navbar.style.boxShadow =
                    "0 4px 10px rgba(0,0,0,.05)";
            }

        }
    );

});
