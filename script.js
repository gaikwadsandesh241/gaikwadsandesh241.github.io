
window.addEventListener("scroll", () => {
    const heroText = document.querySelectorAll(".hero-text");
    const aboutSection = document.getElementById("about-section");
    const scrollY = window.scrollY;

    heroText.forEach(text => {
        if (scrollY > 150) {
            text.style.opacity = "0";
            text.style.transform = "translateY(-20px)";
            aboutSection.classList.add("centered");
        } else {
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";
            aboutSection.classList.remove("centered");
        }
    });
});





console.log("Portfolio Loaded Successfully");
