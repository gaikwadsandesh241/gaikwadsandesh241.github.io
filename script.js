
window.addEventListener("scroll", () => {
    const heroText = document.querySelectorAll(".hero-text");
    const scrollY = window.scrollY;

    heroText.forEach(text => {
        if (scrollY > 150) {
            text.style.opacity = "0";
            text.style.transform = "translateY(-20px)";
        } else {
            text.style.opacity = "1";
            text.style.transform = "translateY(0)";
        }
    });
});




console.log("Portfolio Loaded Successfully");
