function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
const rainText = "Discover the Future of Shopping";
const container = document.getElementById("rain-text");

rainText.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;

    // Delay each letter (rain effect)
    span.style.animationDelay = `${index * 0.08}s`;

    container.appendChild(span);
});
