
function validateJoinTeam() {

    var name = document.getElementById("full-name").value.trim();
    var dob = document.getElementById("date-of-birth").value;
    var expertise = document.getElementById("expertise").value;
    var education = document.getElementById("education").value.trim();
    var photo = document.getElementById("photo").files[0];
    var email = document.getElementById("email").value.trim();
    var skills = document.getElementById("skills").value.trim();

    if (name === "" || dob === "" || expertise === "" ||
        education === "" || !photo || email === "" || skills === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (/^[0-9]/.test(name)) {
        alert("Full Name must not start with a number.");
        return false;
    }

    if (!/^image\//.test(photo.type)) {
        alert("Please upload an image file only.");
        return false;
    }

    var birthYear = new Date(dob).getFullYear();

    if (birthYear > 2008) {
        alert("Birth year must be 2008 or earlier.");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Thank you, " + name +
          "! Your application has been submitted successfully.");

    return false;
}
