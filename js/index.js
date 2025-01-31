const btn = document.getElementById("btn");
const scrollDiv = document.getElementById("scroll");
const stopPos = 500;
const fixedPos = 50;

scrollDiv.addEventListener("scroll", () => {
    if (scrollDiv.scrollTop >= stopPos - fixedPos) {
        btn.classList.add("btn-fixed");
    } else {
        btn.classList.remove("btn-fixed");
    }
});
