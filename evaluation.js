
const evaluationForm = document.querySelector(".evaluation-form");

evaluationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const offering = document.getElementById("offering-name");
    const rating = document.querySelector('input[name="rating"]:checked');
    const feedback = document.getElementById("feedback");

    // Check required fields
    if (offering.value === "") {
        alert("Please select an offering.");
        offering.focus();
        return;
    }

    if (!rating) {
        alert("Please select a rating.");
        return;
    }

    if (feedback.value.trim() === "") {
        alert("Please write your feedback.");
        feedback.focus();
        return;
    }

    // Display message based on rating
    const ratingValue = Number(rating.value);

    if (ratingValue >= 4) {
        alert("Thank you for your positive evaluation! We are glad you enjoyed the offering.");
    } else {
        alert("We are sorry your experience did not meet your expectations. Thank you for your feedback.");
    }

    // Redirect to Member Dashboard
    window.location.href = "member-dashboard.html";
});
