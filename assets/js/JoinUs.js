let aside = document.querySelector("#aside_main");
let btnJoin = document.querySelector("#joinLink");
joinLink.addEventListener("click", (e) => {
    e.preventDefault();
    aside.classList.remove("hidden");
    document.body.style.overflow = "hidden";
});

document.addEventListener("click", (e) => {
    if (!aside.contains(e.target) && !joinLink.contains(e.target)) {
        aside.classList.add("hidden");
        document.body.style.overflow = "scroll";
        document.querySelector("header").style.backgroundColor = "";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let joinButton = document.getElementById('joinButton');

    joinButton.addEventListener("click", function(event) {
        event.preventDefault();
        let fullName = document.getElementById('join_full_name').value;
        let email = document.getElementById('join_email').value;
        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        document.getElementById('join_full_name').value = "";
        document.getElementById('join_email').value = "";
    });
});
document.getElementById('toggleRightBar').addEventListener('click', function() {
    var rightBar = document.getElementById('right_bar');
    var overlay = document.getElementById('overlay');
    var header = document.querySelector("header");

    rightBar.classList.toggle('open');
    overlay.style.display = (overlay.style.display === "block") ? "none" : "block";


    if (rightBar.classList.contains('open')) {
        header.style.backgroundColor = "transparent";
    } else {
        header.style.backgroundColor = "";
    }
});

document.getElementById('closeRightBar').addEventListener('click', function() {
    var rightBar = document.getElementById('right_bar');
    var overlay = document.getElementById('overlay');
    var header = document.querySelector("header");

    rightBar.classList.remove('open');
    overlay.style.display = "none";
    header.style.backgroundColor = "";
});
document.getElementById('close_aside').addEventListener('click', function() {
    aside.classList.add("hidden");
});