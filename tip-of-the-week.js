
const tips = [
    {
        title: "Use Natural Light",
        description: "Natural light can make your photos look brighter and more balanced."
    },
    {
        title: "Try Different Angles",
        description: "Take photos from different angles to make them more interesting."
    },
    {
        title: "Keep the Background Simple",
        description: "A simple background helps people focus on the main subject."
    }
];

let currentTip = 0;

document.getElementById("next-tip").onclick = function() {

    currentTip++;

    if (currentTip === tips.length) {
        currentTip = 0;
    }

    document.getElementById("tip-title").textContent =
        tips[currentTip].title;

    document.getElementById("tip-text").textContent =
        tips[currentTip].description;
};
