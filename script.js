



window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");

    if (window.scrollY > 200) {
        hero.style.display = "none";
    } else {
        hero.style.display = "flex";
    }
});





console.log("Portfolio Loaded Successfully");
