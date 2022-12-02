//manufacturers section horizontal scroll

const manufacturersBox = document.getElementById("manufacturers-box");
const manufacturers = document.getElementsByClassName("manufacturer");

document.getElementById("scroll-left").onclick = () => {
    manufacturersBox.scrollLeft -= manufacturersBox.scrollWidth / manufacturers.length;
}
document.getElementById("scroll-right").onclick = () => {
    manufacturersBox.scrollLeft += manufacturersBox.scrollWidth / manufacturers.length;
}


//faq section accordion

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}