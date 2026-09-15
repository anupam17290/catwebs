/* =========================================================
   CATWEBS — GLOBAL JAVASCRIPT
   Step 1: Navigation + Foundation
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const mobileToggle =
        document.querySelector(".mobile-toggle");

    const navMenu =
        document.querySelector(".nav-menu");

    if (mobileToggle && navMenu) {

        mobileToggle.addEventListener("click", () => {

            const isOpen =
                navMenu.classList.toggle("open");

            mobileToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            document.body.classList.toggle(
                "nav-open",
                isOpen
            );
        });


        /* Close menu after selecting a link */

        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "nav-open"
                );
            });

        });


        /* Close when Escape is pressed */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                navMenu.classList.contains("open")
            ) {

                navMenu.classList.remove("open");

                mobileToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "nav-open"
                );

                mobileToggle.focus();
            }

        });

    }


    /* =====================================================
       NAVBAR SCROLL STATE
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        const updateNavbar =
            () => {

                navbar.classList.toggle(
                    "scrolled",
                    window.scrollY > 15
                );

            };

        updateNavbar();

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );
    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPath =
        window.location.pathname
            .replace(/\/+$/, "");

    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            const href =
                link.getAttribute("href");

            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("http")
            ) {
                return;
            }

            const linkPath =
                new URL(
                    href,
                    window.location.href
                ).pathname
                    .replace(/\/+$/, "");

            if (
                linkPath === currentPath ||
                (
                    currentPath === "" &&
                    linkPath.endsWith("/index.html")
                )
            ) {

                link.classList.add("active");

            }

        });


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                event => {

                    const selector =
                        anchor.getAttribute("href");

                    if (
                        !selector ||
                        selector === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            selector
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".fade-up, .fade-in"
        );

    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    document
        .querySelectorAll("[data-current-year]")
        .forEach(element => {

            element.textContent =
                new Date().getFullYear();

        });

});
