
const sortSelect = document.getElementById("sort-offerings");
const container = document.querySelector(".offerings-container");
const offerings = Array.from(container.querySelectorAll(".card"));

// Get offering name
function getName(card) {
    return card.querySelector("h2").textContent.trim();
}

// Get offering price
function getPrice(card) {
    const text = card.querySelector(".card-meta").textContent;
    const match = text.match(/(\d+)\s*SAR/i);
    return match ? Number(match[1]) : 0;
}

// Display offerings in the chosen order
function displayOfferings(cards) {
    cards.forEach(card => container.appendChild(card));
}

// Random order when the page loads
const randomOfferings = [...offerings];

for (let i = randomOfferings.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomOfferings[i], randomOfferings[j]] =
        [randomOfferings[j], randomOfferings[i]];
}

displayOfferings(randomOfferings);

// Sort by name or price
sortSelect.addEventListener("change", function () {
    const sorted = [...offerings];

    if (this.value === "name-az") {
        sorted.sort((a, b) => getName(a).localeCompare(getName(b)));
    } else if (this.value === "name-za") {
        sorted.sort((a, b) => getName(b).localeCompare(getName(a)));
    } else if (this.value === "price-low") {
        sorted.sort((a, b) => getPrice(a) - getPrice(b));
    } else if (this.value === "price-high") {
        sorted.sort((a, b) => getPrice(b) - getPrice(a));
    } else {
        displayOfferings(randomOfferings);
        return;
    }

    displayOfferings(sorted);
});
