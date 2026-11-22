
let leaders = [
    {
        id: "sara",
        name: "Sara Ahmed",
        expertise: "Portrait Photography",
        email: "sara@lensclub.com"
    },
    {
        id: "omar",
        name: "Omar Khaled",
        expertise: "Mobile Photography",
        email: "Omar@lensclub.com"
    },
    {
        id: "lama",
        name: "Lama Ali",
        expertise: "Photo Editing",
        email: "Lama@lensclub.com"
    }
];

// Get the delete form
const deleteForm = document.querySelector(".delete-leaders-form");

deleteForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get selected checkboxes
    const selected = document.querySelectorAll(
        ".leaders-table tbody input[name='leaders']:checked"
    );

    // Check if no leader is selected
    if (selected.length === 0) {
        alert("Please select at least one leader to delete.");
        return;
    }

    // Ask for confirmation
    const answer = confirm(
        "Are you sure you want to delete the selected leaders?"
    );

    if (answer === false) {
        return;
    }

    // Delete selected leaders
    for (let i = 0; i < selected.length; i++) {

        const selectedId = selected[i].value;

        // Update the leaders array
        for (let j = leaders.length - 1; j >= 0; j--) {
            if (leaders[j].id === selectedId) {
                leaders.splice(j, 1);
            }
        }

        // Remove the leader from the table
        const row = selected[i].parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

    alert("Selected leaders deleted successfully!");

});

/* Add New Activity Leader */

const addForm = document.querySelector(".instructor-form");

addForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("full-name").value.trim();
    const dob = document.getElementById("date-of-birth").value;
    const email = document.getElementById("email").value.trim();
    const expertise = document.getElementById("expertise").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const education = document.getElementById("education").value.trim();
    const photo = document.getElementById("photo").files[0];

    // Check empty fields
    if (name === "" || dob === "" || email === "" ||
        expertise === "" || skills === "" ||
        education === "" || !photo) {

        alert("Please fill in all fields.");
        return;
    }

    // Validate name
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name must contain letters only.");
        return;
    }

    // Validate date of birth
    if (new Date(dob) > new Date()) {
        alert("Date of birth cannot be in the future.");
        return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate text fields
    if (!/[A-Za-z]/.test(expertise) ||
        !/[A-Za-z]/.test(skills) ||
        !/[A-Za-z]/.test(education)) {

        alert("Please enter valid text information.");
        return;
    }

    // Validate photo
    if (!photo.type.startsWith("image/")) {
        alert("Please select a valid image.");
        return;
    }

    // Read selected photo
    const expertiseText = document.getElementById("expertise").selectedOptions[0].text;
    const reader = new FileReader();

    reader.onload = function() {

        // Create new leader object
        const newLeader = {
            id: "leader-" + Date.now(),
            name: name,
            dob: dob,
            email: email,
            expertise: expertiseText,
            skills: skills,
            education: education,
            photo: reader.result
        };

        // Add leader to array
        leaders.push(newLeader);

        // Create new table row
        const row = document.createElement("tr");

        // Checkbox
        const selectCell = document.createElement("td");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.name = "leaders";
        checkbox.value = newLeader.id;
        checkbox.setAttribute(
            "aria-label", "Select " + name
        );

        selectCell.appendChild(checkbox);
        row.appendChild(selectCell);

        // Photo
        const photoCell = document.createElement("td");
        photoCell.className = "photo-cell";
        const img = document.createElement("img");

        img.src = newLeader.photo;
        img.alt = name;
        img.width = 80;

        photoCell.appendChild(img);
        row.appendChild(photoCell);

        // Name
        const nameCell = document.createElement("td");
        nameCell.textContent = name;
        row.appendChild(nameCell);

        // Expertise
        const expertiseCell = document.createElement("td");
        expertiseCell.textContent = expertiseText;
        row.appendChild(expertiseCell);

        // Email
        const emailCell = document.createElement("td");
        emailCell.textContent = email;
        row.appendChild(emailCell);

        // Display new leader
        document.querySelector(
            ".leaders-table tbody"
        ).appendChild(row);

        alert(name + " has been added successfully!");

        // Clear the form
        addForm.reset();
    };

    reader.onerror = function() {
        alert("Could not read the selected photo.");
    };

    reader.readAsDataURL(photo);

});
