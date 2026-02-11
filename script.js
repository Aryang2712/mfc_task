// ===== Countdown Timer =====
let eventDate = new Date("March 10, 2026 10:00:00").getTime();

let timer = setInterval(function () {

    let now = new Date().getTime();
    let distance = eventDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML =
        "Event starts in: " + days + " days";

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }

}, 1000);


// ===== Form Validation =====
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let deptInput = document.getElementById("department");

nameInput.addEventListener("input", function () {
    if (nameInput.value.length < 3) {
        document.getElementById("nameError").innerText =
            "Name must be at least 3 characters.";
    } else {
        document.getElementById("nameError").innerText = "";
    }
});

emailInput.addEventListener("input", function () {
    if (!emailInput.value.includes("@")) {
        document.getElementById("emailError").innerText =
            "Enter valid email.";
    } else {
        document.getElementById("emailError").innerText = "";
    }
});

phoneInput.addEventListener("input", function () {
    if (phoneInput.value.length != 10 || isNaN(phoneInput.value)) {
        document.getElementById("phoneError").innerText =
            "Enter 10 digit number.";
    } else {
        document.getElementByById("phoneError").innerText = "";
    }
});

deptInput.addEventListener("change", function () {
    if (deptInput.value === "") {
        document.getElementById("deptError").innerText =
            "Select department.";
    } else {
        document.getElementById("deptError").innerText = "";
    }
});


// ===== Submit Event =====
document.getElementById("registrationForm").addEventListener("submit", function (e) {

    e.preventDefault();

    if (
        nameInput.value.length >= 3 &&
        emailInput.value.includes("@") &&
        phoneInput.value.length == 10 &&
        !isNaN(phoneInput.value) &&
        deptInput.value !== ""
    ) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("registrationForm").reset();
    }

});