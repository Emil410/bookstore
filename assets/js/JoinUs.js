let aside = document.querySelector("#aside_main");
let btnJoin = document.querySelector("#joinLink");
joinLink.addEventListener("click", (e) => {
    e.preventDefault();
    aside.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
    document.querySelector("header").style.backgroundColor = "transparent";
});

document.addEventListener("click", (e) => {
    if (!aside.contains(e.target) && !joinLink.contains(e.target)) {
        aside.classList.add("hidden");
        document.body.style.overflow = "scroll";
        document.body.style.backgroundColor = "";
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