var darkImages = ["LensClub.png", "facebook.png", "linkedin.png", "instagram.png", "X.png", "phone.png", "email.png", "location.png", "add.png", "manage.png", "calendar.png", "cash.png", "Learn.png", "Connect.png", "Grow.png", "menu.png"];
var lightImages = ["LensClub-light.png", "facebook-light.png", "linkedin-light.png", "instagram-light.png", "X-light.png", "phone-light.png", "email-light.png", "location-light.png", "add-light.png", "manage-light.png", "calendar-light.png", "cash-light.png", "Learn-light.png", "Connect-light.png", "Grow-light.png", "menu-light.png"];

function updateImages() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        var name = images[i].getAttribute("src");

        for (var j = 0; j < darkImages.length; j++) {
            if (document.body.className == "dark" && name == darkImages[j]) {
                images[i].src = lightImages[j];
            } else if (document.body.className != "dark" && name == lightImages[j]) {
                images[i].src = darkImages[j];
            }
        }
    }
}

if (localStorage.getItem("theme") == "dark") {
    document.body.className = "dark";
}

updateImages();

var themeButton = document.getElementById("theme-button");

if (themeButton != null) {

    if (document.body.className == "dark") {
        themeButton.innerHTML = '<img src="sun.png" alt="Switch to light mode">';
    } else {
        themeButton.innerHTML = '<img src="moon.png" alt="Switch to dark mode">';
    }

    themeButton.onclick = function () {
        if (document.body.className == "dark") {
            document.body.className = "";
            localStorage.setItem("theme", "light");
            themeButton.innerHTML = '<img src="moon.png" alt="Switch to dark mode">';
        } else {
            document.body.className = "dark";
            localStorage.setItem("theme", "dark");
            themeButton.innerHTML = '<img src="sun.png" alt="Switch to light mode">';
        }
        updateImages();
    };
}

var menuButton = document.getElementById("menu-button");
var nav = document.getElementsByTagName("nav")[0];

if (menuButton != null) {
    menuButton.onclick = function () {
        if (nav.style.display == "flex") {
            nav.style.display = "";
        } else {
            nav.style.display = "flex";
        }
    };
}