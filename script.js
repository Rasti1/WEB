document.addEventListener("DOMContentLoaded", function() {
    const applyButton = document.getElementById("applyFiltersBtn");
    if (applyButton) {
        applyButton.addEventListener("click", function() {
            applyButton.textContent = "Фільтри застосовані";
            applyButton.style.backgroundColor = "#28a745";
            setTimeout(function() {
                applyButton.textContent = "Застосувати";
                applyButton.style.backgroundColor = "#F73A38";
            }, 2000);
        });
    }

    if (window.location.pathname.includes("catalog.html")) {
        const productCards = document.querySelectorAll(".product-card, .product-card1, .product-card2");

        productCards.forEach(card => {
            card.addEventListener("mouseover", function() {
                card.style.transform = "none";
            });

            card.addEventListener("mouseout", function() {
                card.style.transform = "none";
            });
        });
    }

    // Гамбургер-меню
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("header nav ul");

    if (hamburger && navMenu) {
        navMenu.classList.add("nav-menu");

        hamburger.addEventListener("click", function() {
            navMenu.classList.toggle("active");
            hamburger.querySelector("span").textContent = navMenu.classList.contains("active") ? "✖" : "☰";
        });
    }


    const parallaxImage = document.querySelector(".parallax-image");
    const bannerText = document.querySelector(".banner-content");
    const banner = document.querySelector(".banner");

    if (parallaxImage && bannerText && banner) {
        let scrollOffset = 0;
        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener("scroll", function() {
            scrollOffset = window.scrollY;
            bannerText.style.transform = `translateY(${-scrollOffset * 0.5}px)`;
            parallaxImage.style.transform = `translate(${mouseX}px, ${scrollOffset * 0.4 + mouseY}px)`;
        });

        banner.addEventListener("mousemove", function(e) {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
            parallaxImage.style.transform = `translate(${mouseX}px, ${scrollOffset * 0.4 + mouseY}px)`;
        });

        banner.addEventListener("mouseleave", function() {
            mouseX = 0;
            mouseY = 0;
            parallaxImage.style.transform = `translate(${mouseX}px, ${scrollOffset * 0.4 + mouseY}px)`;
        });
    }
});