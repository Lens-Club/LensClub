
const form = document.querySelector(".admin-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("offering-name").value.trim();

    const image = document.getElementById("offering-image").files[0];

    const price = document.getElementById("offering-price").value.trim();

    const description = document.getElementById("offering-description").value.trim();


    // Validate offering name
    if (name === "") {
        alert("Please enter the offering name.");
        return;
    }

    if (/^[0-9]/.test(name)) {
        alert("Offering name cannot start with a number.");
        return;
    }


    // Validate offering image
    if (!image) {
        alert("Please select an offering image.");
        return;
    }

    if (!image.type.startsWith("image/")) {
        alert("Please select a valid image.");
        return;
    }


    // Validate offering price
    if (price === "") {
        alert("Please enter the offering price.");
        return;
    }

    if (!Number.isFinite(Number(price)) || Number(price) < 0) {
        alert("Please enter a valid price.");
        return;
    }


    // Validate description
    if (description === "") {
        alert("Please enter the offering description.");
        return;
    }


    // Read the selected image
    const reader = new FileReader();

    reader.onload = function() {

        // Create a new offering object
        const newOffering = {
            name: name,
            image: reader.result,
            price: Number(price),
            description: description
        };

        try {

            // Get previously saved offerings
            const offerings = JSON.parse(
                localStorage.getItem("managerOfferings")
            ) || [];

            // Add the new offering
            offerings.push(newOffering);

            // Save all offerings
            localStorage.setItem(
                "managerOfferings",
                JSON.stringify(offerings)
            );

            // Success message
            alert(name + " has been added successfully!");

            // Clear the form
            form.reset();

        } catch (error) {
            alert("Could not save the offering. Please try a smaller image.");
        }
    };

    reader.onerror = function() {
        alert("Could not read the selected image.");
    };

    reader.readAsDataURL(image);

});
